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
    <div className="flex flex-row justify-between w-full h-6 mt-3 mb-7 pr-7">
      <div className=" font-medium text-lg select-none">{labelText}</div>
      <div className="h-4 flex text-sm text-purple-700 whitespace-nowrap text-right cursor-pointer mt-1 select-none">
        View more
      </div>
    </div>
  );
};

export default TabsLabelViewMore;
