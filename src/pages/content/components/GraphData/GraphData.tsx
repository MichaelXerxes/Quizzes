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
import { format } from "date-fns";
const timestamp = new Date("May 23 2017").getTime();
const ONE_DAY = 86400000;

interface GraphProps {
  data: { x0: number; x: number; y: number }[];
  yDomainStart?: number;
  yDomainEnd?: number;
}

const GraphData: React.FC<GraphProps> = ({
  data,
  yDomainStart = 0,
  yDomainEnd = 400,
}) => {
  const maxX = data.reduce((max, p) => (p.x > max ? p.x : max), data[0].x);
  const tickFormatFunction = (value: number, index: number) => {
    const date = new Date(value);

    //return `${date.getMonth() + 1}/${date.getDate()}`;
    const labelInterval = Math.ceil(data.length / 5);
    return index % labelInterval === 0 ? format(new Date(value), "d MMM") : "";
  };
  return (
    <XYPlot
      width={400}
      height={350}
      xDomain={[timestamp - 2 * ONE_DAY, maxX]}
      yDomain={[yDomainStart, yDomainEnd]}
      xType="time"
    >
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis tickFormat={tickFormatFunction} />
      <YAxis />
      <AreaSeries
        data={data}
        color="#F3EEFB"
        //   opacity={0.7}
      />
    </XYPlot>
  );
};

export default GraphData;
