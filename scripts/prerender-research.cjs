#!/usr/bin/env node
/**
 * Build static, crawlable HTML for the research index and scholarly essay.
 * Content is server-rendered from the same React components and JSON source
 * used by the interactive SPA; there is no separately maintained prose copy.
 */
const fs = require("fs");
const path = require("path");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
const build = path.join(root, "build");
const index = path.join(build, "index.html");
if (!fs.existsSync(index)) throw Error("Build the React site first.");

for (const extension of [".ts", ".tsx"]) {
  require.extensions[extension] = (module, filename) => {
    const transpiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
      fileName: filename,
      compilerOptions: {
        target: ts.ScriptTarget.ES2019,
        module: ts.ModuleKind.CommonJS,
        jsx: ts.JsxEmit.React,
        esModuleInterop: true
      },
      reportDiagnostics: true
    });
    const errors = (transpiled.diagnostics || []).filter(
      diagnostic => diagnostic.category === ts.DiagnosticCategory.Error
    );
    if (errors.length) {
      throw Error(errors.map(d => ts.flattenDiagnosticMessageText(d.messageText, "\n")).join("\n"));
    }
    module._compile(transpiled.outputText, filename);
  };
}
require.extensions[".css"] = module => { module.exports = {}; };

const React = require("react");
const { MemoryRouter } = require("react-router-dom");
const { renderToStaticMarkup } = require("react-dom/server");
const Research = require(path.join(root, "src/research/Research.tsx")).default;
const ResearchPaper = require(path.join(root, "src/research/ResearchPaper.tsx")).default;
const template = fs.readFileSync(index, "utf8");

function generate(route, Component, title, description, requiredSentences) {
  const body = renderToStaticMarkup(React.createElement(
    MemoryRouter,
    { initialEntries: [route] },
    React.createElement(Component)
  ));
  for (const text of requiredSentences) {
    if (!body.includes(text)) throw Error("Missing research text: " + text);
  }
  if (!/<div\s+id=["']root["']\s*><\/div>/i.test(template)) {
    throw Error("CRA template has no empty #root element.");
  }
  let html = template.replace(
    /<div\s+id=["']root["']\s*><\/div>/i,
    () => '<div id="root">' + body + '</div>'
  );
  html = html.replace(/<title>[^<]*<\/title>/i, "<title>" + title + "</title>");
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'][^"']*["']\s*\/?>/i,
    '<meta name="description" content="' + description + '"/>'
  );
  const metadata = [
    '<meta name="robots" content="index, follow"/>',
    '<link rel="canonical" href="https://joepearson.music' + route + '"/>',
    '<meta property="og:type" content="article"/>',
    '<meta property="og:title" content="' + title + '"/>',
    '<meta property="og:description" content="' + description + '"/>'
  ].join("\n    ");
  html = html.replace("</head>", "    " + metadata + "\n  </head>");
  html = html.replace(
    "<noscript>You need to enable JavaScript to run this app.</noscript>",
    "<noscript>The complete research text is available below without JavaScript.</noscript>"
  );
  const directory = path.join(build, route.replace(/^\//, ""));
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), html, "utf8");
  console.log("Prerendered " + route + " (" + body.length + " HTML characters)");
}

generate(
  "/research",
  Research,
  "Research | joepearson.music",
  "Research papers and musicological investigations by Joe Pearson.",
  ["Research", "On Temperament and Tuning"]
);
generate(
  "/research/on-temperament-and-tuning",
  ResearchPaper,
  "On Temperament and Tuning | joepearson.music",
  "A working academic essay on the history of tuning systems, temperament, and A=440 Hz by Joe Pearson.",
  ["Zarlino vs Galilei", "Concert Pitch", "Bibliography", "The question of which consonances a musical culture should prioritize has a history."]
);
