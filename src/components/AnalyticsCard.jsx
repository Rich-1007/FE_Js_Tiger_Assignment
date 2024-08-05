import React, { useEffect, useState } from "react";
import { getShipments } from "../data";
import Loading from "./Loading";

const AnalyticsCard = ({ props }) => {
  const [itemData, setItemDat] = useState();

  const shipmentFetch = async () => {
    const fetchShipmentsData = await getShipments();
    const results = fetchShipmentsData.data.map((item) => {
      return item[props];
    });
    countOccurrences(results);
  };

  useEffect(() => {
    shipmentFetch();
  }, []);

  function countOccurrences(arr) {
    const counts = {};
    arr.forEach((item) => {
      counts[item] = (counts[item] || 0) + 1;
    });
    // console.log(counts);

    const arr1 = Object.keys(counts);
    const formattedCounts = arr1.map((item) => {
      return { [item]: counts[item] };
    });
    setItemDat(formattedCounts);
  }

  if (!itemData) {
    return (
      <div className="flex justify-center items-center bg-white py-2 px-3 w-full rounded-xl h-72">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="bg-white py-2 px-3 w-full rounded-xl h-72 overflow-hidden">
        <div className="py-3">
          <span className="font-semibold  text-lg text-gray-800 capitalize  ">
            {props}
          </span>
        </div>

        <div className="overflow-y-auto h-52 scrollbarStyling ">
          <div className="py-1 space-y-2  text-[11px] font-semibold">
            {itemData &&
              itemData.map((item, index) => (
                <div
                  key={index}
                  className=" border-b py-1 px-1 border-gray-300 flex flex-row justify-between items-center "
                >
                  <span>{Object.keys(item)}</span>
                  <span>{Object.values(item)}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalyticsCard;
