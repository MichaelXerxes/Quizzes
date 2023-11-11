// LineChartExample.tsx
import React from "react";
import { Line } from "react-chartjs-2";
interface DataSets {
  label: string;
  data: number[];
  backgroundColor?: string;
  borderColor: string;
  type: "line"; // Specify the type as "line"
  fill?: boolean;
}
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const datasets: DataSets[] = [
  {
    label: "Dataset 1",
    data: [65, 59, 80, 81, 56, 55, 40],
    borderColor: "red",
    backgroundColor: "rgba(255, 0, 0, 0.5)",
    type: "line",
  },
  {
    label: "Dataset 2",
    data: [28, 48, 40, 19, 86, 27, 90],
    borderColor: "blue",
    backgroundColor: "rgba(0, 0, 255, 0.5)",
    type: "line",
  },
];
const data = {
  labels: labels,
  datasets: datasets,
};

const LineChartExample: React.FC = () => {
  const options = {
    responsive: true,
    plugins: {
      //   legend: {
      //     position: "top",
      //   },
      //   title: {
      //     display: true,
      //     text: "Chart.js Line Chart",
      //   },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChartExample;
