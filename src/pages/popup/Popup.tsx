import React, { FC } from "react";
import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.css";
import useStorage from "@src/shared/hooks/useStorage";
import exampleThemeStorage from "@src/shared/storages/exampleThemeStorage";
import withSuspense from "@src/shared/hoc/withSuspense";
import TopBarSpeyImage from "../content/components/TopBarSpeyImage/TopBarSpeyImage";
import TabsMotion from "../content/components/TabsMotion/TabsMotion";
import Footer from "../content/components/Footer/Footer";
interface PopupProps {}
const Popup: FC = () => {
  const theme = useStorage(exampleThemeStorage);

  return (
    <div className="App">
      <div className="popup-content">
        <TopBarSpeyImage />
        <TabsMotion />
        <Footer />
      </div>
      {/* <header className="App-header">
      
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-lime-400">
          Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>

        <button
          style={{
            color: theme === "light" ? "#fff" : "#000",
          }}
          onClick={exampleThemeStorage.toggle}
        >
          Micahel Toggle theme: [{theme}]
        </button>
      </header> */}
    </div>
  );
};

const WrappedPopup = withSuspense<PopupProps>(Popup);

export default WrappedPopup;
