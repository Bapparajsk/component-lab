"use client";

import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";

import { GraphLayout } from "@/components/dashboard/GraphLayout";

export const UserGraph = () => {

  return (
    <div className={"w-full h-auto flex flex-col lg:flex-row border-b border-gray-600"}>
      <div className={"w-full lg:w-1/2 h-96"}>
        <GraphLayout>
          <LineChart
            xAxis={[{
              data: [
                "1", "2", "3", "4", "5", "6"
              ]
            }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5]
              }
            ]}
          />
        </GraphLayout>
      </div>
      <div className={"w-full lg:w-1/2 h-96"}>
        <GraphLayout>
          <BarChart
            xAxis={[{
              scaleType: "band", data: [
                "1", "2", "3"
              ]
            }]}
            series={[{ data: [4, 3, 8] }]}
          />
        </GraphLayout>
      </div>
    </div>
  );
};
