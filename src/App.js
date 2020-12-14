import React from "react";
import { Prisma } from "./Prisma";
import { code2 } from "./utility";
import { code3 } from "./utility";

export const App = () => {
  return (
    <>
      <Prisma code={code2} language="js" plugins={["line-numbers"]} />
      <Prisma code={code3} language="js" plugins={["line-numbers"]} />
    </>
  );
};
