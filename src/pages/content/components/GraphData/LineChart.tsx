// src/components/LineChart.tsx
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
export interface LineChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor: string;
    type: "line"; // Specify the type as "line"
    fill?: boolean;
  }[];
}

const LineChart: React.FC<LineChartProps> = ({ labels, datasets }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              ...datasets, // Include existing datasets
              {
                label: "Horizontal Line",
                data: Array(labels.length).fill(9),
                backgroundColor: "rgba(0, 0, 0, 0)", // Transparent background
                borderColor: "blue",
                type: "line",
                fill: false,
                borderDash: [5, 5], // Set borderDash for a dashed line
              },
            ],
          },
          options: {
            responsive: true,
            // scales: {
            //   x: {
            //     type: "linear",
            //     position: "bottom",
            //     min: 0, // Adjust the min value as needed
            //     max: 20,
            //   },
            //   y: {
            //     min: 0,
            //     max: 10,
            //   },
            // },
          },
        });
      }
    }
  }, [labels, datasets]);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="200"></canvas>s
    </div>
  );
};

export default LineChart;
