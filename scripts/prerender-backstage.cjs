#!/usr/bin/env node
/**
 * Publish a real HTML document at /backstage, sourced from the same React
 * components as the interactive site. This makes the full text available to
 * crawlers that do not execute JavaScript. The SPA replaces the static markup
 * with the interactive version on normal page loads.
 *
 * Run automatically via npm's postbuild after "react-scripts build".
 */
const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const repoRoot = path.resolve(__dirname, "..");
const buildDir = path.join(repoRoot, "build");
const entryHtmlPath = path.join(buildDir, "index.html");
const mediaDirectory = path.join(buildDir, "static", "media");

if (!fs.existsSync(entryHtmlPath)) {
  throw new Error("Run react-scripts build before generating the backstage HTML.");
}

// On the server, load the actual TSX components rather than maintaining a
// manually copied second version of the published essays.
for (const extension of [".ts", ".tsx"]) {
  require.extensions[extension] = (mod, filename) => {
    const source = fs.readFileSync(filename, "utf8");
    const transpiled = ts.transpileModule(source, {
      fileName: filename,
      compilerOptions: {
        target: ts.ScriptTarget.ES2019,
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.React,
        esModuleInterop: true,
      },
      reportDiagnostics: true,
    });
    const errors = (transpiled.diagnostics || []).filter(
      (d) => d.category === ts.DiagnosticCategory.Error
    );
    if (errors.length) {
      throw new Error(
        "Cannot render " +
          filename +
          ":\n" +
          errors
            .map((d) => ts.flattenDiagnosticMessageText(d.messageText, "\n"))
            .join("\n")
      );
    }
    mod._compile(transpiled.outputText, filename);
  };
}
require.extensions[".css"] = (mod) => {
  mod.exports = {};
};

// The React components import real MP4s. Match those to the fingerprints that
// Create React App already emitted in build/static/media, rather than copying
// the videos or requiring a browser in the build environment.
require.extensions[".mp4"] = (mod, filename) => {
  const basename = path.basename(filename, ".mp4");
  if (!fs.existsSync(mediaDirectory)) {
    throw new Error("Missing compiled media folder: " + mediaDirectory);
  }
  const matches = fs
    .readdirSync(mediaDirectory)
    .filter((name) => name.startsWith(basename + ".") && name.endsWith(".mp4"));
  if (matches.length !== 1) {
    throw new Error(
      "Expected exactly one compiled MP4 for " +
        filename +
        "; found " +
        matches.length
    );
  }
  mod.exports = "/static/media/" + encodeURIComponent(matches[0]);
};

const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const Backstage = require(path.join(
  repoRoot,
  "src",
  "backstage",
  "Backstage.tsx"
)).default;

const rendered = renderToStaticMarkup(React.createElement(Backstage));

// Prevent accidentally publishing a blank or truncated crawler version.
const essentialText = [
  "Backstage",
  "Self Titled",
  "The Single Petal of a Rose",
  "You Don't Know My Name",
  "It's a Man's Man's Man's World",
  "Day Tripper",
  "Sarabande in G",
  "Sarabande in A-flat minor",
  "Research sources",
];
for (const text of essentialText) {
  if (!rendered.includes(text.replace(/'/g, "&#x27;")) && !rendered.includes(text)) {
    throw new Error("Backstage SSR missing expected content: " + text);
  }
}

const template = fs.readFileSync(entryHtmlPath, "utf8");
const rootPattern = /<div\s+id=["']root["']\s*><\/div>/i;
if (!rootPattern.test(template)) {
  throw new Error("CRA HTML template no longer has an empty #root element.");
}
let html = template.replace(rootPattern, () => '<div id="root">' + rendered + "</div>");

const description =
  "Writing, research and original music by Joe Pearson. Essays on the five cover compositions on Self Titled, including Duke Ellington, Alicia Keys, James Brown, the Beatles and J. S. Bach, with audio and waveform context.";
html = html.replace(
  /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
  '<meta name="description" content="' + description + '"/>'
);
html = html.replace(
  /<title>[^<]*<\/title>/i,
  "<title>Backstage — Joe Pearson | Music, Research and Recordings</title>"
);
const searchMetadata = [
  '<meta name="robots" content="index, follow"/>',
  '<link rel="canonical" href="https://joepearson.music/backstage"/>',
  '<meta property="og:type" content="website"/>',
  '<meta property="og:title" content="Backstage — Joe Pearson"/>',
  '<meta property="og:description" content="' + description + '"/>',
  '<meta property="og:url" content="https://joepearson.music/backstage"/>',
].join("\n    ");
if (!html.includes("</head>")) {
  throw new Error("CRA HTML template has no closing head tag.");
}
html = html.replace("</head>", "    " + searchMetadata + "\n  </head>");
html = html.replace(
  "<noscript>You need to enable JavaScript to run this app.</noscript>",
  "<noscript>Backstage's essays and descriptions are available below without JavaScript.</noscript>"
);

if (/noindex|nofollow/i.test(html)) {
  throw new Error("Crawled HTML must not contain noindex/nofollow directives.");
}
const outputDirectory = path.join(buildDir, "backstage");
fs.mkdirSync(outputDirectory, { recursive: true });
const outputFile = path.join(outputDirectory, "index.html");
fs.writeFileSync(outputFile, html, "utf8");
console.log(
  "Prerendered /backstage/index.html with " +
    rendered.length +
    " characters of readable HTML from React components."
);
