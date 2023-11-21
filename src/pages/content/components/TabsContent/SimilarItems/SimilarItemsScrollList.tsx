import React from "react";
import ScrollCarList from "../../ScrollCarList/ScrollCarList";
import { cars, cars2 } from "../../HorizontalScrollableList/mockDataCars";
import TabsLabelViewMore from "../../TabsLabelViewMore/TabsLabelViewMore";
interface Props {}
const SimilarItemsScrollList: React.FC<Props> = ({}) => {
  return (
    <div style={{ paddingTop: 20, position: "relative" }}>
      <div style={{ marginLeft: 30 }}>
        <TabsLabelViewMore />
      </div>
      <ScrollCarList cars={cars} />
      <div style={{ paddingLeft: 30, paddingRight: 30 }}>
        <div className="tabsMotion-breakline" />
      </div>
      <div style={{ marginLeft: 30 }}>
        <TabsLabelViewMore labelText="Similar items sold" />
      </div>
      <ScrollCarList cars={cars2} />
      <div style={{ paddingLeft: 30, paddingRight: 30 }}>
        <div className="tabsMotion-breakline" />
      </div>
    </div>
  );
};
export default SimilarItemsScrollList;
