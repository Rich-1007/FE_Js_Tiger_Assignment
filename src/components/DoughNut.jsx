import React, { useEffect, useState } from "react";
import { Doughnut, Pie } from "react-chartjs-2";
import { getDonutData } from "../utils/getDonutData";
import DonutData from "./DonutData";

const labels = [];

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

  const YANTIAN = shipmentsData?.data.filter(
    (item) => item.loading === "YANTIAN, CHINA"
  ).length;

  const SHANGHAI = shipmentsData?.data.filter(
    (item) => item.loading === "SHANGHAI, CHINA"
  ).length;

  const NINGBO = shipmentsData?.data.filter(
    (item) => item.loading === "NINGBO, CHINA"
  ).length;

  const DALIAN = shipmentsData?.data.filter(
    (item) => item.loading === "DALIAN, CHINA"
  ).length;

  const QINGDAO = shipmentsData?.data.filter(
    (item) => item.loading === "QINGDAO, CHINA"
  ).length;

  // console.log("donutCharts: ", donutCharts);

  return (
    <>
      <div className=" px-4 ">
        <div className="flex gap-4 items-center ">
          {donutCharts &&
            donutCharts.map((item, index) => (
              <DonutData
                key={index}
                legendText={labels[index]}
                chartData={item}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default DoughNut;