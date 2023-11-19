import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import "./TabsMotion.css";
import GraphDisplay from "../GraphData/GraphDisplay";
import LineChartExample from "../GraphData/LineChartExample";
import PriceTrends from "../TabsContent/PriceTrends/PriceTrends";
import SimilarItems from "../TabsContent/SimilarItems/SimilarItems";
import SimilarItemsScrollList from "../TabsContent/SimilarItems/SumilarItemsScrollList";
import Comments from "../TabsContent/Comments/Comments";
const tabs = [
  {
    label: "Similar items",
    content: <SimilarItems />,
  },
  {
    label: "Price trends",
    content: <SimilarItemsScrollList />,
  },
  {
    label: "Comments",
    content: <Comments />,
  },
  {
    label: "Notes",
    content: (
      // <div>
      //   <GraphDisplay />
      //   <LineChartExample />
      // </div>

      <PriceTrends />
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
