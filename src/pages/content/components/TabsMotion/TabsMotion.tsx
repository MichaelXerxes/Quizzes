import React, { useState } from "react";
import { motion } from "framer-motion";
import TabsCarItem from "../TabsCarItem/TabsCarItem";
import { useSwipeable } from "react-swipeable";
import { cars } from "../HorizontalScrollableList/mockDataCars";
import "./TabsMotion.css";
const tabs = [
  {
    label: "Similar items",
    content: (
      <TabsCarItem
        carImage={cars[0].carImage}
        carType={cars[0].carType}
        carPriceRange={cars[0].priceRange}
      />
    ),
  },
  {
    label: "Price trends",
    content: (
      <TabsCarItem
        carImage={cars[1].carImage}
        carType={cars[1].carType}
        carPriceRange={cars[1].priceRange}
      />
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
