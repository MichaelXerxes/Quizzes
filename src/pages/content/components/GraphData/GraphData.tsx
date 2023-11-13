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

  const baseline = [{ x: 0, y: 0 }, data[0]];
  return (
    <div>
      <XYPlot width={400} height={400}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <AreaSeries
          data={[...baseline, ...data]}
          color="#F3EEFB"
          //   opacity={0.7}
        />
        {/* <LineSeries
          data={data}
          color="#7F56D9"
          opacity={0.7}
          style={{ overflow: "hidden" }}
        /> */}
        {/* <MarkSeries data={data} fill="#7F56D9" stroke="none" /> */}
      </XYPlot>
      <DiscreteColorLegend
        orientation="horizontal"
        items={[{ title: "Data" }]}
      />
    </div>
  );
};

export default GraphData;
