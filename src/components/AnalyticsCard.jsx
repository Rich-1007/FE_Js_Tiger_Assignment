import React, { useEffect, useState } from "react";
import { getShipments } from "../data";

const AnalyticsCard = ({ props }) => {
  //   const [shipmentsData, setShipmentsData] = useState();

  const [loading, setLoading] = useState();
  const [itemData, setItemDat] = useState();

  {
    // shipmentsData && console.log(shipmentsData);
  }

  const shipmentFetch = async () => {
    const fetchShipmentsData = await getShipments();
    // setShipmentsData(fetchShipmentsData.data);

    const poi = fetchShipmentsData.data.map((item) => {
      return item[props];
    });
    // setLoading(poi);
    countOccurrences(poi);
  };

  useEffect(() => {
    shipmentFetch();
  }, []);

  //   if (shipmentsData) {
  //     const poi = shipmentsData.map((item) => {
  //       return item.loading;
  //     });
  //     setLoading(poi);
  //   }

  function countOccurrences(arr) {
    const counts = {};
    arr.forEach((item) => {
      counts[item] = (counts[item] || 0) + 1;
    });
    // console.log(counts);

    const arr1 = Object.keys(counts);

    const abc = arr1.map((item) => {
      return { [item]: counts[item] };
    });
    setItemDat(abc);

    // return arr1;
  }

  //   if (loading) {
  //     countOccurrences(loading);
  //   }
  // console.log(itemData);

  return (
    <>
      <div className="bg-white py-2 px-3 w-full rounded-xl h-72 overflow-hidden">
       <div className="py-3">
        <span className="font-semibold  text-lg text-gray-800 capitalize  ">{props}</span>
       </div>


        <div className="overflow-y-auto h-52 scrollbarStyling ">
          <div className="py-1 space-y-2  text-[11px] font-semibold">
            {itemData &&
              itemData.map((item , index) => (
                <div key={index} className=" border-b py-1 px-1 border-gray-300 flex flex-row justify-between items-center ">
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
