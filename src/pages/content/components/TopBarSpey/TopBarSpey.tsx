import React, { ReactElement, useState } from "react";
import speyLogo from "../../../../assets/icons/speyLogo.svg";
import x from "../../../../assets/icons/x.svg";
import "@pages/content/components/TopBarSpey/TopBarSpey.css";
interface Props {
  onClose: () => void;
  isOryginalSize?: boolean;
}

const TopBarSpey = ({
  onClose,
  isOryginalSize = true,
}: Props): ReactElement => {
  const dynamicStyleMainDiv = {
    width: isOryginalSize ? "410px" : "100%",
    height: isOryginalSize ? "62px" : "62px",
  };
  const dynamicStyleInnerDiv = {
    width: isOryginalSize ? "370px" : "100%",
    height: isOryginalSize ? "26px" : "100%",
    marginLeft: isOryginalSize ? "0px" : "20px",
    marginRight: isOryginalSize ? "0px" : "20px",
    marginTop: isOryginalSize ? "0px" : "20px",
    marginBottom: isOryginalSize ? "0px" : "20px",
  };
  return (
    <div className="topbarspey-container" style={dynamicStyleMainDiv}>
      <div className="topbarspey-container-inner" style={dynamicStyleInnerDiv}>
        <div className="topbarspey-logo-div">
          <img src={speyLogo} className="topbarspey-logo" alt="logo" />
          <div className="topbarspey-text">Spey</div>
        </div>
        <button onClick={onClose}>
          <img src={x} className="topbarspey-back" alt="x" />
        </button>
      </div>
    </div>
  );
};

export default TopBarSpey;
