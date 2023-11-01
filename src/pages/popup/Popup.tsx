import React, { FC } from "react";
import logo from "@assets/img/logo.svg";
import "@pages/popup/Popup.css";
import useStorage from "@src/shared/hooks/useStorage";
import exampleThemeStorage from "@src/shared/storages/exampleThemeStorage";
import withSuspense from "@src/shared/hoc/withSuspense";
import TopBarSpey from "../content/components/TopBarSpey/TopBarSpey";
import DisplayItemTitleBox from "../content/components/DisplayItemTitleBox/DisplayItemTitleBox.";
import {
  cars,
  cars2,
} from "../content/components/HorizontalScrollableList/mockDataCars";
import HorizontalScrollableList from "../content/components/HorizontalScrollableList/HorizontalScrollableList";
import SplideCarCarousel from "../content/components/SplideCarCarousel/SplideCarCarousel";
interface PopupProps {}
const Popup: FC = () => {
  const theme = useStorage(exampleThemeStorage);

  return (
    <div className="App">
      <div className="test">
        <TopBarSpey
          onClose={() => {
            console.log("Closing");
          }}
        />
        <div className="properdivsettings">
          <DisplayItemTitleBox />
          <HorizontalScrollableList itemsData={cars} />
          <HorizontalScrollableList itemsData={cars2} />
        </div>
        <SplideCarCarousel data={cars} />
        <SplideCarCarousel data={cars2} />
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
