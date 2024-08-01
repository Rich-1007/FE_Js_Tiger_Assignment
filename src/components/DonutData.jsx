import React, { useEffect, useState } from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(ArcElement);

const DonutData = ({ legendText, chartData }) => {
  const [data, setData] = useState();
  const colors = [
    "#EB5D50",
    "#F7A668",
    "#7BB896",
    "#1073E6",
    "#856562",
    "#6B120A",
  ];

  console.log(chartData);
  useEffect(() => {
    if (chartData) {
      setData({
        labels: Object.keys(chartData),
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: colors,

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
      <h2 className="text-center font-Poppins font-semibold py-1 text-md text-gray-600 text-nowrap">
        {legendText}
      </h2>

      <div>
        {chartData &&
          Object.keys(chartData).map((item, index) => {
            return (
              <div className="flex flex-row items-center gap-2">
                <div
                  style={{ backgroundColor: `${colors[index]}` }}
                  className={` rounded-full h-3 w-3`}
                ></div>
                <span className="text-xs line-clamp-1">{item}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DonutData;
