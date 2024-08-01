import React, { useEffect, useState } from "react";
import { getShipments } from "../data";
import { useSearchParams } from "react-router-dom";

const AnalyticsTable = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [shipmentsData, setShipmentsData] = useState();

  const shipmentFetch = async () => {
    const fetchShipmentsData = await getShipments();
    setShipmentsData(fetchShipmentsData.data);
  };

  useEffect(() => {
    shipmentFetch();
  }, []);

  const pageNumber = searchParams.get("page") || "1";
  const pageSize = searchParams.get("limit") || "10";

  // console.log(shipmentsData[0].id);

  function formatDate(dateStr) {
    const date = new Date(dateStr);

    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }

  return (
    <>
      <div className="bg-white   rounded-xl overflow-x-auto scrollbarStyling">
        <table className="min-w-full bg-white border border-gray-200  w-screen md:text-lg text-sm text-nowrap table-fixed">
          <thead className="bg-gray-200 border-b ">
            <tr>
              <th className=" py-2 px-4 text-left   md:w-44 w-32   text-gray-600 font-medium">
                HBL#
              </th>
              <th className="py-2 px-4 text-left text-gray-600   md:w-44 w-32  font-medium">
                MBL#
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium  md:w-44 w-32  ">
                PO# / REF#
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium  md:w-44 w-32  ">
                Receipt
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium   md:w-44 w-32 ">
                Loading
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium   md:w-44 w-32 ">
                Discharge
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium   md:w-44 w-32 ">
                Delivery
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium  md:w-44 w-32  ">
                Booking#
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium   md:w-44 w-32 ">
                Size Type
              </th>

              <th className="  py-2 px-4 text-left text-gray-600 font-medium  md:w-44 w-32 ">
                Carrier
              </th>

              <th className="py-2   px-4 text-left text-gray-600 font-medium  md:w-44 w-32 ">
                Commodity
              </th>

              <th className="py-2 px-4   text-left text-gray-600 font-medium  md:w-44 w-32 ">
                Milestone
              </th>

              <th className="py-2 px-4 text-left   text-gray-600 font-medium  md:w-44 w-32 ">
                Milestone Group
              </th>
            </tr>
          </thead>
          <tbody>
            {shipmentsData
              ?.slice((+pageNumber - 1) * +pageSize, +pageNumber * +pageSize)
              .map((item) => (
                <tr
                  key={item.id}
                  className="border-b hover:bg-gray-50 lg:text-sm text-[13px]  "
                >
                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    {item.hbl_no}
                  </td>
                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    {item.mbl_no}{" "}
                  </td>
                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    {item.po_ref_no}
                  </td>

                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    <p>{item.recipt}</p>

                    <p className="text-[12px] ">
                      {formatDate(item.recipt_date)}
                    </p>
                  </td>

                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    <p>{item.loading}</p>

                    <p className="text-[12px]">
                      {formatDate(item.loading_date)}
                    </p>
                  </td>

                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    <p>{item.discharge}</p>

                    <p className="text-[12px]">
                      {formatDate(item.discharge_date)}
                    </p>
                  </td>

                  <td className="py-1 px-4 whitespace-pre-wrap text-nowrap ">
                    <p>{item.delivery}</p>

                    <p className="text-[12px]">
                      {formatDate(item.delivery_date)}
                    </p>
                  </td>

                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    {item.booking_no}
                  </td>
                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    {item.size_type}
                  </td>
                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    {item.carrier}
                  </td>
                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    {item.commodity}
                  </td>
                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    {item.milestone}
                  </td>
                  <td className="py-2 px-4 whitespace-pre-wrap text-nowrap ">
                    {item.milestone_group}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AnalyticsTable;
