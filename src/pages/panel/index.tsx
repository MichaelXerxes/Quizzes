import React from "react";
import { createRoot } from "react-dom/client";
import Panel from "@pages/panel/Panel";
import "@pages/panel/index.css";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/panel");

function init(): void {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find #app-container");
  }

  const root = createRoot(appContainer);
  root.render((<Panel />) as any);
}

init();
