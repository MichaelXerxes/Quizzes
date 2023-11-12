import React from "react";
import { Line } from "react-chartjs-2";
interface DataSets {
  label: string;
  data: any[];
  backgroundColor?: string;
  borderColor: string;
  type: "line";
  fill?: boolean;
  pointRadius?: number;
}
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const datasets: DataSets[] = [
  {
    label: "Dataset 1",
    data: [
      220, 222, 224, 226, 228, 231, 234, 236, 242, 245, 248, 250, 290, 280, 274,
      270,
    ],
    borderColor: "red",
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    type: "line",
    pointRadius: 5,
  },
  {
    label: "Dataset 2",
    data: [
      { x: 0, y: 220 },
      { x: 10, y: 220 },
      { x: 15, y: 220 },
      { x: 20, y: 220 },
      { x: 25, y: 220 },
      { x: 30, y: 220 },
      { x: 35, y: 220 },
      { x: 40, y: 220 },
      { x: 45, y: 220 },
      { x: 50, y: 220 },
      { x: 55, y: 220 },
      { x: 60, y: 220 },
      { x: 65, y: 220 },
    ],
    borderColor: "blue",
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    type: "line",
    pointRadius: 5,
  },
  //   {
  //     label: "Dataset 2",
  //     data: [28, 48, 40, 19, 86, 27, 90],
  //     borderColor: "blue",
  //     backgroundColor: "rgba(0, 0, 255, 0.5)",
  //     type: "line",
  //   },
];
const data = {
  labels: labels,
  datasets: datasets,
};

const LineChartExample: React.FC = () => {
  const options = {
    responsive: true,
    // scales: {
    //   x: {
    //     type: "line"  ,//as const,
    //     position: "bottom",
    //     min: 0,
    //     max: 6, // Adjust the max value based on the number of months
    //     ticks: {
    //       stepSize: 1, // Set the step size between ticks
    //       callback: (value: any) => labels[value], // Use custom labels from the 'labels' array
    //     },
    //   },
    //   y: {
    //     min: 0,
    //     max: 350000, // Adjust the max value based on your data
    //     ticks: [0, 100000, 150000, 200000, 250000, 300000, 350000],

    //     // callback: (value) =>
    //     //   (value / 1000).toLocaleString("en-GB", {
    //     //     style: "currency",
    //     //     currency: "GBP",
    //     //   }),
    //   },
    // },
    plugins: {
      //   legend: {
      //     position: "top",
      //   },
      //   title: {
      //     display: true,
      //     text: "Chart.js Line Chart",
      //   },
    },

    elements: {
      line: {
        fill: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChartExample;
