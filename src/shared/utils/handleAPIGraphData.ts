interface ApiData {
  x: number; // Represents the day as an integer
  y: number; // Represents the price
}

interface ChartData {
  x0: number;
  x: number;
  y: number;
}

export const processApiData = (
  apiData: ApiData[],
  startDate: Date
): ChartData[] => {
  const ONE_DAY_MS = 86400000; // Milliseconds in a day
  const timestamp = startDate.getTime();

  return apiData.map((el, index) => {
    //  x0 as either the start of the day or the previous day's end
    const x0 =
      index === 0
        ? timestamp + el.x * ONE_DAY_MS
        : timestamp + (el.x - 1) * ONE_DAY_MS;
    const x = timestamp + el.x * ONE_DAY_MS;

    return { x0, x, y: el.y };
  });
};
