import React, { useEffect, useState } from "react";
import { getDonutData } from "../utils/getDonutData";
import DonutData from "./DonutData";

const DoughNut = ({ shipmentsData }) => {
  const [donutCharts, setDonutCharts] = useState();

  useEffect(() => {
    if (shipmentsData) {
      const data = getDonutData(shipmentsData);

      setDonutCharts(data);
    }
  }, [shipmentsData]);

  const labels = [
    "Origin Port",
    "Destination Port",
    "Carrier",
    "Consignee or Shipper",
    "Milestone",
  ];

  return (
    <>
      <div className="px-4 py-5 ">
        <div className="pb-4">
          <span className="text-gray-600 font-bold text-lg">
            Pie Chart Analysis
          </span>
        </div>

        <div className="flex md:gap-4 gap-12 lg:items-start items-center lg:flex-row flex-col justify-between ">
          {donutCharts &&
            donutCharts.map((item, index) => (
              <div className="lg:w-44 w-full ">
                <DonutData
                  key={index}
                  legendText={labels[index]}
                  chartData={item}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DoughNut;
