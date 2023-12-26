import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexCharts from "apexcharts";

interface chartProps {
  coinId: string | undefined;
}
interface Ihistorical {
  time_open: number;
  time_close: number;
  open: string;
  low: string;
  close: string;
  volume: string;
  marcket_cap: number;
}

const Chart = ({ coinId }: chartProps) => {
  const params = useParams();
  console.log(params);
  const { isLoaing, data } = useQuery<Ihistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoaing ? (
        "Loading Chart..."
      ) : (
        <ApexCharts
          type="line"
          series={[
            {
              name: "hello",
              data: [1, 2, 3, 4, 5],
            },
            {
              name: "sales",
              data: [15, 18, 15, 78, 56],
            },
          ]}
          options={{
            chart: {
              width: 500,
              height: 500,
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
