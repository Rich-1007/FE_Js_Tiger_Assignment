import React from "react";
import {
  FaAngleDown,
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiTruck } from "react-icons/hi";
import { IoAirplaneOutline, IoNotificationsOutline } from "react-icons/io5";
import { LuShip } from "react-icons/lu";
import AnalyticsCard from "../components/AnalyticsCard";
import AnalyticsTable from "../components/AnalyticsTable";
import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Analytics = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNumber = searchParams.get("page") || "1";
  const pageSize = searchParams.get("limit") || "10";
  return (
    <>
      <div className="bg-gray-200 lg:px-8 px-2  pb-8 overflow-hidden flex-grow lg:pl-44">
        <div className=" w-full md:px-10 h-14 flex flex-row justify-around md:justify-between border-b border-gray-400 px-4 items-center">
          <span className="font-bold lg:text-base text-sm">Analytics</span>
          <div className="flex  flex-row items-center gap-3">
            <div className="relative">
              <div className="bg-red-500 absolute top-0 left-2.5 h-2 w-2 rounded-full"></div>
              <IoNotificationsOutline size={18} />
            </div>
            <div className="flex flex-row gap-1 items-center lg:pr-2">
              <img
                src="public/images.jpg"
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

        <div className="flex flex-row justify-center  py-5 gap-3 ">
          <NavLink
            className={({ isActive }) =>
              `border-b-2  gap-2 py-1 basis-16 flex flex-row ${
                isActive ? " border-orange-400 text-orange-700" : "text-gray-500 w-full"
              }`
            }
            to="/analytics/sea"
          >
            {/* <div className="border-b-2 flex flex-row w-16 text-orange-500 py-1 border-orange-400 justify-center items-center gap-2 "> */}
            <LuShip  size={20} />
            <span>Sea</span>
            {/* </div> */}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `border-b-2 justify-center items-center  gap-2 py-1 basis-16 flex flex-row ${
                isActive ? " border-orange-400 text-orange-700 " : "text-gray-500 w-full"
              }`
            }
            to="/analytics/air"
          >
            {/* <div className="border-b-2 flex flex-row w-16 text-orange-500 py-1 border-orange-400 justify-center items-center gap-2"> */}
            <IoAirplaneOutline size={20} />
            <span>Air</span>
            {/* </div> */}
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `border-b-2 justify-center items-center gap-2 py-1 basis-16 flex flex-row ${
                isActive ? " border-orange-400 text-orange-700" : "text-gray-500 w-full"
              }`
            }
            to="/analytics/land"
          >
            <div className="flex flex-row w-16 justify-center items-center gap-2  ">
              <HiTruck size={20} />
              <span>Land</span>
            </div>
          </NavLink>
        </div>

        <div className=" flex justify-center ">
          <div className="bg-white flex flex-row gap-8 px-7 rounded-lg py-3 shadow-md">
            <div className="bg-[#caafab] rounded-md px-2 py-1 text-[#7e5855]  font-semibold">
              <span>Shipments</span>
            </div>
            <div className="font-semibold text-gray-500">
              <span>Containers</span>
            </div>
          </div>
        </div>
        <Outlet />

        {/* 










        <div className=" rounded-lg flex lg:flex-row flex-col space-y-2  w-full items-center py-4 bg-white my-6 ">
          <div className="flex items-center justify-between ">
            <label className="font-semibold text-sm px-2" htmlFor="">
              Type
            </label>
            <input
              type="text"
              placeholder="Select"
              className="outline-none border border-gray-400 rounded-2xl px-3 py-1"
            />
          </div>

          <div className="">
            <div className="flex items-center ">
              <label className="font-semibold text-sm px-2" htmlFor="">
                Date
              </label>
              <input
                type="text"
                placeholder="Select"
                className="outline-none border border-gray-400 rounded-2xl px-3 py-1"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center ">
              <label className="font-semibold text-sm px-2" htmlFor="">
                Period
              </label>
              <input
                type="text"
                placeholder="Select"
                className="outline-none border border-gray-400 rounded-2xl px-3 py-1"
              />
            </div>
          </div>

          <div className=" flex lg:w-auto w-full justify-center">
            <button className="border-[#6B120A] border border-b-red-950 rounded-2xl px-5 py-1 text-red-900 font-semibold lg:ml-12 bottom-1 text-{#6B120A]">
              Cancel
            </button>
            <button className="rounded-2xl py-1 px-4 ml-2 text-white bg-[#6B120A] font-semibold">
              Go
            </button>
          </div>
        </div>



        <div className=" w-full flex lg:gap-7 gap-5 lg:flex-row flex-col py-2 ">
          <div className="  rounded-lg  h-60 lg:w-1/2 shadow-lg bg-white">
            <div className="flex justify-between  items-center  px-4  py-2 ">
             
             
             
              <span className="font-semibold text-gray-700">Milestones</span>
              <div className="text-gray-600 font-thin border border-gray-300 rounded-lg px-3 py-1">
                <span>IN-TRANSIT (463)</span>
              </div>
            </div>
          </div>
          <div className="  rounded-lg   h-60 lg:w-1/2 shadow-lg bg-white">
          <div className="flex justify-start items-center  px-4  py-3">

          <span className="font-semibold text-gray-700">Timelines</span>
          </div>
          
          
          
          
          
          </div>
        </div>

        <div className="py-5 justify-between grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          <AnalyticsCard props={"loading"} />
          <AnalyticsCard props={"discharge"} />
          <AnalyticsCard props={"delivery"} />
          <AnalyticsCard props={"shipper"} />
          <AnalyticsCard props={"consignee"} />
          <AnalyticsCard props={"carrier"} />
        </div>

        <div className="px-4  my-4 bg-white rounded-lg shadow-lg  pb-2">
          <div className=" flex justify-end py-5   ">
            <div className="   bg-orange-500 hover:cursor-pointer py-1 px-4 rounded-2xl text-white font-semibold flex flex-row items-center gap-2">
              <MdOutlineFileDownload size={18} />
              <span>Download</span>
            </div>
          </div>
          <AnalyticsTable />

          <div className=" my-6 py-5 flex flex-row items-center justify-between ">
            <div className="  flex flex-row items-center">
              <div className="space-x-2">
                <select
                  className="border rounded-md text-sm w-12 p-1"
                  name="pageSize"
                  id="pageSize"
                  value={+pageSize}
                  onChange={(e) => {
                    searchParams.set("limit", `${e.target.value}`);
                    setSearchParams(searchParams);
                  }}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                </select>

                <span>1-10 of 25</span>
              </div>
            </div>

            <div className=" flex flex-row items-center gap-4 ">
              <div className="flex flex-row items-center gap-1 md:gap-2 ">
                <FaChevronLeft />

                <div
                  className={`border border-gray-400 h-6 w-6 rounded-md flex items-center justify-center cursor-pointer ${
                    pageNumber == 1
                      ? "bg-[#524746] text-white"
                      : "border-gray-400"
                  }`}
                >
                  <button
                    className="h-full w-full "
                    onClick={() => {
                      searchParams.set("page", `1`);
                      setSearchParams(searchParams);
                    }}
                  >
                    1
                  </button>
                </div>

                <div
                  className={`border border-gray-400 h-6 w-6 rounded-md flex items-center justify-center cursor-pointer ${
                    pageNumber == 2
                      ? "bg-[#524746] text-white"
                      : "border-gray-400"
                  }`}
                >
                  <button
                    className="h-full w-full "
                    onClick={() => {
                      searchParams.set("page", `2`);
                      setSearchParams(searchParams);
                    }}
                  >
                    2
                  </button>
                </div>

                <div
                  className={`border border-gray-400 h-6 w-6 rounded-md flex items-center justify-center cursor-pointer ${
                    pageNumber == 3
                      ? "bg-[#524746] text-white"
                      : "border-gray-400"
                  }`}
                >
                  <button
                    className="h-full w-full "
                    onClick={() => {
                      searchParams.set("page", `3`);
                      setSearchParams(searchParams);
                    }}
                  >
                    3
                  </button>
                </div>

                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>















        <div className=" rounded-lg flex lg:flex-row flex-col space-y-2  w-full items-center py-4 bg-white my-6 ">
          <div className="flex items-center justify-between ">
            <label className="font-semibold text-sm px-2" htmlFor="">
              Type
            </label>
            <input
              type="text"
              placeholder="Select"
              className="outline-none border border-gray-400 rounded-2xl px-3 py-1"
            />
          </div>

          <div className="">
            <div className="flex items-center ">
              <label className="font-semibold text-sm px-2" htmlFor="">
                Date
              </label>
              <input
                type="text"
                placeholder="Select"
                className="outline-none border border-gray-400 rounded-2xl px-3 py-1"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center ">
              <label className="font-semibold text-sm px-2" htmlFor="">
                Period
              </label>
              <input
                type="text"
                placeholder="Select"
                className="outline-none border border-gray-400 rounded-2xl px-3 py-1"
              />
            </div>
          </div>

          <div className=" flex lg:w-auto w-full justify-center">
            <button className="border-[#6B120A] border border-b-red-950 rounded-2xl px-5 py-1 text-red-900 font-semibold lg:ml-12 bottom-1 text-{#6B120A]">
              Cancel
            </button>
            <button className="rounded-2xl py-1 px-4 ml-2 text-white bg-[#6B120A] font-semibold">
              Go
            </button>
          </div>
        </div>



        <div className=" w-full flex lg:gap-7 gap-5 lg:flex-row flex-col py-2 ">
          <div className="  rounded-lg  h-60 lg:w-1/2 shadow-lg bg-white">
            <div className="flex justify-between  items-center  px-4  py-2 ">
             
             
             
              <span className="font-semibold text-gray-700">Milestones</span>
              <div className="text-gray-600 font-thin border border-gray-300 rounded-lg px-3 py-1">
                <span>IN-TRANSIT (463)</span>
              </div>
            </div>
          </div>
          <div className="  rounded-lg   h-60 lg:w-1/2 shadow-lg bg-white">
          <div className="flex justify-start items-center  px-4  py-3">

          <span className="font-semibold text-gray-700">Timelines</span>
          </div>
          
          
          
          
          
          </div>
        </div>

        <div className="py-5 justify-between grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          <AnalyticsCard props={"loading"} />
          <AnalyticsCard props={"discharge"} />
          <AnalyticsCard props={"delivery"} />
          <AnalyticsCard props={"shipper"} />
          <AnalyticsCard props={"consignee"} />
          <AnalyticsCard props={"carrier"} />
        </div>

        <div className="px-4  my-4 bg-white rounded-lg shadow-lg  pb-2">
          <div className=" flex justify-end py-5   ">
            <div className="   bg-orange-500 hover:cursor-pointer py-1 px-4 rounded-2xl text-white font-semibold flex flex-row items-center gap-2">
              <MdOutlineFileDownload size={18} />
              <span>Download</span>
            </div>
          </div>
          <AnalyticsTable />

          <div className=" my-6 py-5 flex flex-row items-center justify-between ">
            <div className="  flex flex-row items-center">
              <div className="space-x-2">
                <select
                  className="border rounded-md text-sm w-12 p-1"
                  name="pageSize"
                  id="pageSize"
                  value={+pageSize}
                  onChange={(e) => {
                    searchParams.set("limit", `${e.target.value}`);
                    setSearchParams(searchParams);
                  }}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                </select>

                <span>1-10 of 25</span>
              </div>
            </div>

            <div className=" flex flex-row items-center gap-4 ">
              <div className="flex flex-row items-center gap-1 md:gap-2 ">
                <FaChevronLeft />

                <div
                  className={`border border-gray-400 h-6 w-6 rounded-md flex items-center justify-center cursor-pointer ${
                    pageNumber == 1
                      ? "bg-[#524746] text-white"
                      : "border-gray-400"
                  }`}
                >
                  <button
                    className="h-full w-full "
                    onClick={() => {
                      searchParams.set("page", `1`);
                      setSearchParams(searchParams);
                    }}
                  >
                    1
                  </button>
                </div>

                <div
                  className={`border border-gray-400 h-6 w-6 rounded-md flex items-center justify-center cursor-pointer ${
                    pageNumber == 2
                      ? "bg-[#524746] text-white"
                      : "border-gray-400"
                  }`}
                >
                  <button
                    className="h-full w-full "
                    onClick={() => {
                      searchParams.set("page", `2`);
                      setSearchParams(searchParams);
                    }}
                  >
                    2
                  </button>
                </div>

                <div
                  className={`border border-gray-400 h-6 w-6 rounded-md flex items-center justify-center cursor-pointer ${
                    pageNumber == 3
                      ? "bg-[#524746] text-white"
                      : "border-gray-400"
                  }`}
                >
                  <button
                    className="h-full w-full "
                    onClick={() => {
                      searchParams.set("page", `3`);
                      setSearchParams(searchParams);
                    }}
                  >
                    3
                  </button>
                </div>

                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>













 */}
      </div>
    </>
  );
};

export default Analytics;
