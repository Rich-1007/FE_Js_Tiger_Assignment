import React, { useEffect, useState } from "react";
import { FaAngleDown, FaHistory, FaRegUserCircle } from "react-icons/fa";
import { IoNotifications, IoNotificationsOutline } from "react-icons/io5";
import { MdArchive, MdBlockFlipped } from "react-icons/md";
import { PiNote, PiNotebook, PiNotebookDuotone } from "react-icons/pi";
import { getDocuments, getShipments } from "../data";
import { BiSolidPieChartAlt } from "react-icons/bi";
import Maps from "../components/Maps";
import DoughNut from "../components/DoughNut";
import LatestDocuments from "../components/LatestDocuments.jsx";
import Loading from "../components/Loading.jsx";

const Dashboard = () => {
  const [shipmentsData, setShipmentsData] = useState();
  const [documentsData, setDocumentsData] = useState();

  const YANTIAN = shipmentsData?.data.filter(
    (item) => item.loading === "QINGDAO, CHINA"
  ).length;

  const shipmentFetch = async () => {
    const fetchShipmentsData = await getShipments();
    setShipmentsData(fetchShipmentsData);
  };

  useEffect(() => {
    shipmentFetch();
  }, []);

  const documentFetch = async () => {
    const fetchDocumentsData = await getDocuments();
    setDocumentsData(fetchDocumentsData);
  };

  useEffect(() => {
    documentFetch();
  }, []);

  const booking_no = shipmentsData?.data.filter((item) => {
    return item?.booking_no ? true : false;
  });

  return (
    <>
      <div className="flex flow-row bg-gray-200  flex-grow lg:pl-36 ">
        <div className="w-full ">
          <div className=" w-full md:px-10  h-14 flex flex-row justify-around md:justify-between border-b border-gray-400 pl-8 px-4 items-center">
            <span className="font-bold  lg:text-base text-sm">Dashboard</span>
            <div className="flex  flex-row items-center gap-3">
              <div className="relative">
                <IoNotificationsOutline size={18} />
              </div>
              <div className="flex flex-row gap-1 items-center lg:pr-2">
                <img
                  src="/images.jpg"
                  className="lg:h-9 h-7 object-cover w-7 lg:w-9 rounded-full"
                  alt=""
                />
                <div className="flex flex-col ">
                  <span className="font-bold lg:text-xs text-[10px]">
                    Edward William
                  </span>
                  <span className="text-gray-500 text-[10px]">Admin</span>
                </div>
              </div>
              <FaAngleDown />
            </div>
          </div>

          <div className=" flex flex-col lg:py-0 py-5 md:px-10 gap-4 lg:gap-0 items-center lg:flex-row justify-between w-full  ">
            <div className="lg:py-6 w-full px-3 lg:px-0 ">
              <div className="flex  flex-row justify-between items-center bg-white shadow-xl w-full lg:w-56 rounded-xl px-3 py-3">
                <div className="flex flex-col">
                  <span className="font-bold text-[10px]">Total Bookings</span>
                  <span className="font-bold text-lg">
                    {booking_no?.length} Bookings
                  </span>
                </div>
                <div className="bg-[#72120b] h-12 rounded-xl w-12 flex items-center justify-center">
                  <PiNotebook size={28} color="white" />
                </div>
              </div>
            </div>

            <div className="lg:py-6 w-full px-3 lg:px-0 flex justify-center ">
              <div className="flex flex-row justify-between items-center    bg-white shadow-xl  w-full lg:w-56  rounded-xl px-3 py-3">
                <div className="flex flex-col">
                  <span className="font-bold text-[10px]">
                    Bookings Utilized
                  </span>
                  <span className="font-bold text-lg">
                    {booking_no?.length} Booking
                  </span>
                </div>
                <div className="bg-orange-400 h-12 rounded-xl w-12 flex items-center justify-center">
                  <PiNote size={28} color="white" />
                </div>
              </div>
            </div>

            <div className="lg:py-6 w-full px-3 lg:px-0 flex justify-center ">
              <div className="flex flex-row justify-between items-center    bg-white shadow-xl  w-full lg:w-56  rounded-xl px-3 py-3">
                <div className="flex flex-col">
                  <span className="font-bold text-[10px]">
                    Booking Cancelled
                  </span>
                  <span className="font-bold text-lg">0 Bookings</span>
                </div>
                <div className="bg-orange-600 h-12 rounded-xl w-12 flex items-center justify-center">
                  <MdBlockFlipped size={28} color="white" />
                </div>
              </div>
            </div>

            <div className="lg:py-6 w-full px-3 lg:px-0  flex justify-end">
              <div className="flex flex-row justify-between items-center    bg-white shadow-xl  w-full lg:w-56  rounded-xl px-3 py-3">
                <div className="flex flex-col">
                  <span className="font-bold text-[10px]">Utilization</span>
                  <span className="font-bold text-lg">100 %</span>
                </div>
                <div className="bg-green-600 h-12 rounded-xl w-12 flex items-center justify-center">
                  <BiSolidPieChartAlt size={28} color="white" />
                </div>
              </div>
            </div>
          </div>

          <div className=" h-80 overflow-hidden w-full px-3 md:px-10">
            <div className="bg-white rounded-xl shadow-xl ">
              <Maps />
            </div>
          </div>

          <div className="overflow-hidden w-full px-3 md:px-10">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden ">
              <DoughNut shipmentsData={shipmentsData} />
            </div>
          </div>

          <div className=" lg:px-10 px-3 flex flex-col lg:flex-row gap-5 py-10">
            <div className="bg-white h-96  flex flex-col rounded-xl px-4 py-3 shadow-xl lg:w-1/2">
              <div className="font-bold text-gray-600">Latest Documents</div>

              {!documentsData ? (
                <div className=" h-full flex items-center justify-center ">
                  <Loading />
                </div>
              ) : (
                <LatestDocuments documentsData={documentsData} />
              )}
            </div>
            <div className="h-96 bg-white flex flex-col rounded-xl px-4 py-3 shadow-xl lg:w-1/2  gap-4">
              <span className="font-bold text-gray-600">Announcements</span>
              <span className="text-xs font-semibold text-gray-600">
                Soon you will see latest annoucements/new in this section.
              </span>
              <div className="flex justify-center items-center h-full">
                <img src="/Layer_1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
