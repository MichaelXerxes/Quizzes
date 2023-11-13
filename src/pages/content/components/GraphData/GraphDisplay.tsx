import React from "react";
import LineChart from "./LineChart";
interface DataSets {
  label: string;
  data: number[];
  backgroundColor?: string;
  borderColor: string;
  type: "line";
  fill?: boolean;
}
const GraphDisplay: React.FC = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const datasets: DataSets[] = [
    {
      label: "Dataset 1",
      data: [52, 59, 54, 81, 56, 55, 40],
      backgroundColor: "red",
      borderColor: "rgba(75,192,192,1)",
      type: "line",
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      type: "line",
    },
    // {
    //   label: "Horizontal Line",
    //   data: Array(labels.length).fill(9) as number[],
    //   backgroundColor: "#000",
    //   borderColor: "blue",
    //   type: "line",
    //   fill: true,
    // },
  ];

  return (
    <div className="">
      <header className="">
        <h1>React Chart.js Example</h1>
        <LineChart labels={labels} datasets={datasets} />
      </header>
    </div>
  );
};

export default GraphDisplay;
