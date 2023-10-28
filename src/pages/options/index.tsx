import React, { FunctionComponent } from "react";
import { createRoot } from "react-dom/client";
import Options from "@pages/options/Options";
import "@pages/options/index.css";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/options");

// function init() {
//   const appContainer = document.querySelector("#app-container");
//   if (!appContainer) {
//     throw new Error("Can not find #app-container");
//   }
//   const root = createRoot(appContainer);
//   root.render(<Options />);
// }
function init(): void {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer || !(appContainer instanceof Element)) {
    throw new Error("Cannot find #app-container");
  }
  const root = createRoot(appContainer);
  const optionsElement = React.createElement(Options);
  root.render(optionsElement as any);
}
init();
