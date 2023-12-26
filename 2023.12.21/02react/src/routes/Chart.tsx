import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface chartProps {
  coinId: string | undefined;
}
interface Ihistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: number;
  volume: string;
  marcket_cap: number;
}

const Chart = ({ coinId }: chartProps) => {
  const params = useParams();
  console.log(params);
  const { isLoading, data } = useQuery<Ihistorical[] | any>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "coins",
              data: data?.map((price: any) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              width: 500,
              height: 500,
              toolbar: {
                show: false,
              },
            },
            stroke: {
              curve: "smooth",
              width: 4,
            },
            grid: {
              show: false,
            },
          }}
        />
      )}
    </div>
  );
};

export default Chart;
