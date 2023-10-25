import React, { ReactElement, useState } from "react";
import logoSpey from "./speyLogo.svg";
import x from "./x.svg";

import "@pages/content/components/TopBarSpey/TopBarSpey.css";
interface Props {
  onClose: () => void;
  isOryginalSize?: boolean;
}

const TopBarSpey = ({
  onClose,
  isOryginalSize = true,
}: Props): ReactElement => {
  const [oryginal, setOryginal] = useState(isOryginalSize);
  const toggleSize = () => {
    setOryginal((prevValue) => !prevValue);
  };
  const dynamicStyleMainDiv = {
    width: oryginal ? "342.38px" : "100%",
    height: oryginal ? "55.74px" : "55.74px",
  };
  const dynamicStyleInnerDiv = {
    width: oryginal ? "304.16px" : "100%",
    height: oryginal ? "21px" : "100%",
    marginLeft: oryginal ? "0px" : "20px",
    marginRight: oryginal ? "0px" : "20px",
    marginTop: oryginal ? "0px" : "20px",
    marginBottom: oryginal ? "0px" : "20px",
  };
  return (
    <div className="topbarspey-container" style={dynamicStyleMainDiv}>
      <div className="topbarspey-container-inner" style={dynamicStyleInnerDiv}>
        <div className="topbarspey-logo-div">
          <img src={logoSpey} className="topbarspey-logo" alt="logo" />
          <div className="topbarspey-text">Spey</div>
        </div>
        <button onClick={toggleSize}>
          <img src={x} className="topbarspey-back" alt="x" />
        </button>
      </div>
    </div>
  );
};

export default TopBarSpey;
