import React from "react";
import { createRoot } from "react-dom/client";
import Newtab from "@pages/newtab/Newtab";
import "@pages/newtab/index.css";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { attachTwindStyle } from "@src/shared/style/twind";

refreshOnUpdate("pages/newtab");

function init(): void {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }
  attachTwindStyle(appContainer, document);
  const root = createRoot(appContainer);
  const optionsElement = React.createElement(Newtab);
  root.render(optionsElement as any);
}

init();
