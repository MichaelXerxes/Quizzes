import React from "react";
import "./TabsLabelViewMore.css";
interface LabelProps {
  labelText?: string;
}
const labelDefaultText = "Similar items for sale";
const TabsLabelViewMore: React.FC<LabelProps> = ({
  labelText = labelDefaultText,
}) => {
  return (
    <div className="tabsLabelViewMore-container">
      <div className="tabsLabelViewMore-text">{labelText}</div>
      <div className="tabsLabelViewMore-viewmore">View more</div>
    </div>
  );
};

export default TabsLabelViewMore;
