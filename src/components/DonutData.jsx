import React, { useEffect, useState } from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(ArcElement);

const DonutData = ({ legendText, chartData }) => {
  const [data, setData] = useState();

  console.log(chartData);
  useEffect(() => {
    if (chartData) {
      setData({
        labels: Object.keys(chartData),
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: [
              "#6B120A",
              "#EB5D50",
              "#F7A668",
              "#856562",
              "#7BB896",
            ],
            borderColor: "rgb(255, 255, 255)",
            data: Object.values(chartData),
          },
        ],
      });
    }
  }, [chartData]);
  if (!data) {
    return <h1>Loading..</h1>;
  }
  return (
    <div className="w-full">
      <Doughnut width={"full"} data={data} />
      <h1 className="text-center font-Poppins font-semibold py-1 text-lg text-nowrap">
        {legendText}
      </h1>

      <div>
        {chartData &&
          Object.keys(chartData)
            .slice(0, 5)
            .map((item, index) => {
              return (
                <div className="flex flex-row items-center gap-2">
                  <div className="bg-[#7BB896] rounded-full h-3 w-3"></div>
                  <span className="text-sm line-clamp-1">{item}</span>
                </div>
              );
            })}
        <div className="flex flex-row items-center gap-2">
          <div className="bg-[#7BB896] rounded-full h-3 w-3"></div>
          <span className="text-sm text-nowrap ">Other</span>
        </div>
      </div>
    </div>
  );
};

export default DonutData;
