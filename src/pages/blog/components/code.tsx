import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  language: string;
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, code }) => {
  return (
    <div style={styles.codeBlockContainer}>
      <SyntaxHighlighter
        language={language}
        style={tomorrow}
        customStyle={styles.syntaxHighlighter}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

const Code: React.FC = () => {
  const Code1 = `
import { getValuesfromGoogleSheet, addValuesToGoogleSheet } from 'backend/calc1';

$w.onReady(function () {
    $w("#insertbutton").onClick(async ()=>{
        const firstName = $w('#firstnameinput').value;
        const lastName = $w('#lastnameinput').value;
        const email = $w('#emailinput').value;
        const emissions = $w('#emissions').value;
        const values = ["17", firstName, lastName, email, emissions];
        const result = await addValuesToGoogleSheet(values);

        if(result.status == 200){
            console.log("added");
        }
    })
});
  `;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Code Embedding Example</h1>
      <CodeBlock language="javascript" code={Code1} />
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    boxSizing: "border-box" as "border-box",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  codeBlockContainer: {
    width: "100%",
    overflowX: "auto" as "auto",
    marginBottom: "20px",
  },
  syntaxHighlighter: {
    fontSize: "14px",
    lineHeight: "1.5",
    padding: "15px",
    borderRadius: "4px",
  },
};

export default Code;
