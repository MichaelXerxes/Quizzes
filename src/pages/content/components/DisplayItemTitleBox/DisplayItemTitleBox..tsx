import React, { ReactElement, useState } from "react";
import "./DisplayItemTitleBox.css";

import "@pages/content/components/TopBarSpey/TopBarSpey.css";
interface Props {
  firstTextLine?: string;
  secondTextLineTitle?: string;
}
const firstString = "You are looking for:";
const titleString = "1899 Clément-Panhard Voiture ";
const DisplayItemTitleBox = ({
  firstTextLine = firstString,
  secondTextLineTitle = titleString,
}: Props): ReactElement => {
  return (
    <div className="displayItemTitleBox-container">
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
