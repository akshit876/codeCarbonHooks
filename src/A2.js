import React, { useEffect } from "react";
import prism from "prismjs";
import "./styles.css";

export default function App() {
  let s = `
  import React from "react";
  import prism from "prismjs";
  import "./styles.css";
  const code = \`var data = 1;\`;
  
    // Returns a highlighted HTML string
    const html2 = prism.highlight(s, prism.languages.html, "html");
    return (
      <div className="App">
        <h1>Hello
`;
  const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
`.trim();
  useEffect(() => {
    prism.highlightAll();
  });

  // const html2 = prism.highlightAll();
  return (
    <div className="App">
      <pre className="line-numbers">
        <code className="language-js">{code}</code>
      </pre>
    </div>
  );
}
