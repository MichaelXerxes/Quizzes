import React, { ReactElement, useState } from "react";
import "./DisplayItemTitleBox.css";

interface Props {
  firstTextLine?: string;
  secondTextLineTitle?: string;
  oryginalSize?: boolean;
}
const firstString = "You are looking for:";
const titleString = "1899 Clément-Panhard Voiture ";
const DisplayItemTitleBox = ({
  firstTextLine = firstString,
  secondTextLineTitle = titleString,
  oryginalSize = true,
}: Props): ReactElement => {
  const dynamicContainer = {
    width: oryginalSize ? "259px" : "auto",
    height: oryginalSize ? "48px" : "auto",
  };
  return (
    <div className="displayItemTitleBox-container" style={dynamicContainer}>
      <div className="displayItemTitleBox-first-text-div">
        <div className="displayItemTitleBox-first-text">{firstTextLine}</div>
      </div>
      <div className="displayItemTitleBox-item-title">
        {secondTextLineTitle}
      </div>
    </div>
  );
};

export default DisplayItemTitleBox;
