import React from "react";
import GraphData from "../../GraphData/GraphData";
import Example from "../../GraphData/GraphExample";
import { processApiData } from "@root/src/shared/utils/handleAPIGraphData";
const graphData = [
  { x: 0, y: 220 },
  { x: 10, y: 220 },
  { x: 15, y: 220 },
  { x: 20, y: 230 },
  { x: 25, y: 234 },
  { x: 30, y: 241 },
  { x: 35, y: 251 },
  { x: 40, y: 256 },
  { x: 45, y: 250 },
  { x: 50, y: 262 },
  { x: 55, y: 272 },
  { x: 60, y: 264 },
  { x: 65, y: 258 },
  { x: 65, y: 258 },
  { x: 68, y: 256 },
  { x: 69, y: 150 },
  { x: 71, y: 162 },
  { x: 72, y: 72 },
  { x: 74, y: 64 },
  { x: 80, y: 58 },
  { x: 90, y: 8 },
];
interface Props {}
const PriceTrends: React.FC<Props> = ({}) => {
  const startDate = new Date("May 23 2017");
  const chartData = processApiData(graphData, startDate);
  return (
    <div style={{ justifyContent: "flex-start", marginTop: 20 }}>
      <div
        style={{
          marginLeft: 30,

          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ fontSize: 18, color: "#000", marginBottom: 15 }}>
          Price trends
        </div>
        <div style={{ fontSize: 14, color: "grey" }}>Current Value: </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ fontSize: 22, fontWeight: "600", marginTop: 5 }}>
            £250,000
          </div>
          <div
            style={{
              color: "#16B26A",
              marginTop: 15,
              marginLeft: 10,
              fontSize: 12,
            }}
          >
            {"9.2% (via last month)"}
          </div>
        </div>
      </div>
      <div style={{ width: 400, height: 400 }}>
        <GraphData data={chartData} />
      </div>
      {/* <Example /> */}
    </div>
  );
};

export default PriceTrends;
