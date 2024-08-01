import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { getShipments } from "../data";

import { useState } from "react";

const TimelinesPieChart = () => {
  const [shipmentsData, setShipmentsData] = useState();
  const [onTime, setOnTime] = useState();
  const [onLate, setLate] = useState();

  // console.log( onTime);

  function getEstimatedTimeOfArrival(data) {
    return data?.map((item) => item.estimated_time_of_arrival);
  }

  function getActualTimeOfArrival(data) {
    return data?.map((item) => item.actual_time_of_arrival);
  }

  function countSimilarArrivalTimes(estimatedTimes, actualTimes) {
    let count = 0;
    estimatedTimes?.forEach((estimated) => {
      if (actualTimes?.includes(estimated)) {
        count++;
      }
    });
    return count;
  }

  function countDifferentArrivalTimes(estimatedTimes, actualTimes) {
    let count = 0;
    actualTimes?.forEach((actual) => {
      if (!estimatedTimes?.includes(actual)) {
        count++;
      }
    });
    return count;
  }

  useEffect(() => {
    const estimatedTimesOfArrival = getEstimatedTimeOfArrival(shipmentsData);
    const actualTimesOfArrival = getActualTimeOfArrival(shipmentsData);

    const similarTimesCount = countSimilarArrivalTimes(
      estimatedTimesOfArrival,
      actualTimesOfArrival
    );
    const differentTimesCount = countDifferentArrivalTimes(
      estimatedTimesOfArrival,
      actualTimesOfArrival
    );

    setOnTime(similarTimesCount);

    setSeries([similarTimesCount, differentTimesCount]);
  }, [shipmentsData]);

  const shipmentFetch = async () => {
    const fetchShipmentsData = await getShipments();
    setShipmentsData(fetchShipmentsData.data);
  };

  useEffect(() => {
    shipmentFetch();
  }, []);

  const [series, setSeries] = useState();
  const [options] = useState({
    chart: {
      width: 380,
      type: "pie",
    },

    labels: ["ON TIME (25)", "LATE (0)"],

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
    colors: ["#7BB896", "#F7A668"],
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
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={400}
      />
    </div>
  );
};

export default TimelinesPieChart;
