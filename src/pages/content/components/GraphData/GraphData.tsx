import React from "react";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
  AreaSeries,
  DiscreteColorLegend,
} from "react-vis";

interface GraphProps {
  data: { x: number; y: number }[];
}

const GraphData: React.FC<GraphProps> = ({ data }) => {
  const maxY = 350; //Math.max(...data.map((point) => point.y));

  const baseline = [
    { x: 0, y: 0 },
    { x: data[data.length - 1].x, y: maxY },
  ];

  return (
    <div>
      <XYPlot width={400} height={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={baseline} color="transparent" />
        <LineSeries data={data} />
        <AreaSeries data={data} color="red" />
        <MarkSeries data={data} fill="yellow" stroke="none" />
      </XYPlot>
      <DiscreteColorLegend
        orientation="horizontal"
        items={[{ title: "Data" }]}
      />
    </div>
  );
};

export default GraphData;
