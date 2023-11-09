import React, { useState } from "react";
import { motion } from "framer-motion";
import TabsCarItem from "../TabsCarItem/TabsCarItem";
import { useSwipeable } from "react-swipeable";
import { cars, cars2 } from "../HorizontalScrollableList/mockDataCars";
import "./TabsMotion.css";
import ScrollCarList from "../ScrollCarList/ScrollCarList";
interface LabelProps {
  labelText?: string;
}
const labelDefaultText = "Similar items for sale";
const LabelBar: React.FC<LabelProps> = ({ labelText = labelDefaultText }) => {
  return (
    <div className="labelBar-container">
      <div className="labelBar-text">{labelText}</div>
      <div className="labelBar-viewmore">View more</div>
    </div>
  );
};
const tabs = [
  {
    label: "Similar items",
    content: (
      <div style={{ marginLeft: 20, marginRight: 20, paddingTop: 20 }}>
        <LabelBar />
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
        <LabelBar labelText="Similar items sold" />
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
    ),
  },
  {
    label: "Price trends",
    content: (
      <div style={{ paddingTop: 20 }}>
        <div style={{ marginLeft: 30 }}>
          <LabelBar />
        </div>
        <ScrollCarList cars={cars} />
        <div style={{ paddingLeft: 30, paddingRight: 30 }}>
          <div className="tabsMotion-breakline" />
        </div>
        <div className=" m-7">
          <LabelBar labelText="Similar items sold" />
        </div>
        <ScrollCarList cars={cars2} />
        <div style={{ paddingLeft: 30, paddingRight: 30 }}>
          <div className="tabsMotion-breakline" />
        </div>
      </div>
    ),
  },
  {
    label: "Comments",
    content: (
      <TabsCarItem
        carImage={cars[0].carImage}
        carType={cars[0].carType}
        carPriceRange={cars[0].priceRange}
      />
    ),
  },
  {
    label: "Notes",
    content: (
      <TabsCarItem
        carImage={cars[0].carImage}
        carType={cars[0].carType}
        carPriceRange={cars[0].priceRange}
      />
    ),
  },
];

const TabsMotion: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setSelectedTab((prevTab) =>
        prevTab < tabs.length - 1 ? prevTab + 1 : prevTab
      ),
    onSwipedRight: () =>
      setSelectedTab((prevTab) => (prevTab > 0 ? prevTab - 1 : prevTab)),

    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <div className="tabsMotion-tabsname-div">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
            className={`${selectedTab === index ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        initial={false}
        animate={{ x: selectedTab * -100 + "%" }}
        transition={{ duration: 0.3 }}
      >
        <div style={{ display: "flex", width: "400%" }}>
          {tabs.map((tab, index) => (
            <div key={index} style={{ flex: 1 }}>
              {tab.content}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TabsMotion;
