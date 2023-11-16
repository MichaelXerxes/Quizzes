import React from "react";
import TabsCarItem from "../../TabsCarItem/TabsCarItem";
import { cars, cars2 } from "../../HorizontalScrollableList/mockDataCars";
import TabsLabelViewMore from "../../TabsLabelViewMore/TabsLabelViewMore";
interface Props {}
const SimilarItems: React.FC<Props> = ({}) => {
  return (
    <div
      style={{
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 20,
        position: "relative",
      }}
    >
      <TabsLabelViewMore />
      <div style={{ marginTop: 20 }}>
        <TabsCarItem
          carImage={cars[0].carImage}
          carType={cars[0].carType}
          carPriceRange={cars[0].priceRange}
        />
        <TabsCarItem
          carImage={cars[3].carImage}
          carType={cars[3].carType}
          carPriceRange={cars[3].priceRange}
        />
        <TabsCarItem
          carImage={cars[2].carImage}
          carType={cars[2].carType}
          carPriceRange={cars[2].priceRange}
        />
      </div>
      <div className="tabsMotion-breakline" />
      <TabsLabelViewMore labelText="Similar items sold" />
      <div style={{ marginTop: 20 }}>
        <TabsCarItem
          carImage={cars2[1].carImage}
          carType={cars2[1].carType}
          carPriceRange={cars2[1].priceRange}
          isSold={true}
        />
        <TabsCarItem
          carImage={cars2[0].carImage}
          carType={cars2[0].carType}
          carPriceRange={cars2[0].priceRange}
          isSold={true}
        />
        <TabsCarItem
          carImage={cars2[4].carImage}
          carType={cars2[4].carType}
          carPriceRange={cars2[4].priceRange}
          isSold={true}
        />
      </div>
      <div className="tabsMotion-breakline" />
    </div>
  );
};

export default SimilarItems;
