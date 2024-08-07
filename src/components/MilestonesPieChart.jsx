import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { getShipments } from "../data";

import { useState } from "react";
import Loading from "./Loading";

const MilestonesPieChart = () => {
  const [shipmentsData, setShipmentsData] = useState();
  const [milestones, setMilestones] = useState();
  const [series, setSeries] = useState();

  useEffect(() => {
    if (shipmentsData) {
      const counter = {};
      shipmentsData.forEach((item) => {
        counter[item?.milestone] = (counter[item?.milestone] || 0) + 1;
      });
      setMilestones(counter);
      setSeries(Object.values(counter));
    }
  }, [shipmentsData]);

  // console.log(milestones);

  const shipmentFetch = async () => {
    const fetchShipmentsData = await getShipments();
    setShipmentsData(fetchShipmentsData.data);
  };

  useEffect(() => {
    shipmentFetch();
  }, []);

  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    labels: ["BOOKED", "DISCHARGED", "DELIVERED", "ARRIVED", "RETURNED"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 350,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    colors: ["#6B120A", "#EB5D50", "#F7A668", "#7BB896", "#1073E6"],
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        const seriesValue = opts.w.config.series[opts.seriesIndex];
        const percent = (
          (val / opts.w.globals.seriesTotals[opts.seriesIndex]) *
          100
        ).toFixed(1);
        return `${""} ${""}`;
      },
    },
  };

  if (!shipmentsData) {
    return (
      <div className="h-44 flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div id="chart ">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={400}
      />
    </div>
  );
};

export default MilestonesPieChart;
