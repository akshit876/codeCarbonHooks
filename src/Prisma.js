import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
// import "./styles.css";
export const Prisma = ({ code, plugins, language }) => {
  let ref = React.createRef();
  useEffect(() => {
    highlight();
  }, []);
  useEffect(() => {
    highlight();
  }, [code, plugins, language]);

  const highlight = () => {
    if (ref && ref.current) {
      Prism.highlightElement(ref.current);
    }
  };
  const styleObj = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  };
  const styleObj2 = {
    padding: "2px",
    borderRadius: "12.878px"
  };
  return (
    <div style={styleObj}>
      <pre style={styleObj2} className={!plugins ? "" : plugins.join(" ")}>
        <code ref={ref} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};
