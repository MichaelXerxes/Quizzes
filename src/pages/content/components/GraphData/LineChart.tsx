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
    type: "line";
    fill?: boolean;
    pointRadius?: number;
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
              //  ...datasets,
              {
                label: "Horizontal Line",
                data: Array(labels.length).fill(9),
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderColor: "blue",
                type: "line",
                fill: false,
                borderDash: [5, 5],
              },
              {
                label: "Dataset 1",
                data: [
                  220, 222, 224, 226, 228, 231, 234, 236, 242, 245, 248, 250,
                  290, 280, 274, 270,
                ],
                backgroundColor: "red",
                borderColor: "rgba(75,192,192,1)",
                type: "line",
                fill: false,
                borderDash: [5, 5],
                pointRadius: 5,
              },
            ],
          },
          options: {
            responsive: true,
            scales: {
              x: {
                //type: "linear",
                // position: "bottom",
                min: 0,
                max: 20,
                // ticks: {
                //   stepSize: 5,
                //   //sampleSize: 5,
                // },
              },
              y: {
                min: 0,
                max: 350,
              },
            },

            elements: {
              line: {
                fill: true,
              },
            },
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
