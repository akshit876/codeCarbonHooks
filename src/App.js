import React from "react";
import { Prisma } from "./Prisma";
import { code2 } from "./utility";
import { code3 } from "./utility";

export const App = () => {
  const styleObj = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  };
  return (
    <div style={styleObj}>
      <div style={{ padding: "3px", borderRadius: "2.89px" }}>
        <Prisma code={code2} language="js" plugins={["line-numbers"]} />
      </div>
      <div style={{ padding: "3px", borderRadius: "2.89px" }}>
        <Prisma code={code3} language="js" plugins={["line-numbers"]} />
      </div>
    </div>
  );
};
