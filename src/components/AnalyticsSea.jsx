import React from "react";
import AnalyticsCard from "./AnalyticsCard";
import { MdOutlineFileDownload } from "react-icons/md";
import AnalyticsTable from "./AnalyticsTable";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import MilestonesPieChart from "./MilestonesPieChart";
import TimelinesPieChart from "./TimelinesPieChart";

const AnalyticsSea = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNumber = searchParams.get("page") || "1";
  // const pageSize = searchParams.get("limit") || "10";

  return (
    <>
      <div className=" rounded-lg flex lg:flex-row flex-col space-y-2  w-full items-center py-4 bg-white my-6 ">
        <div className="flex items-center justify-between ">
          <label className="font-semibold text-sm px-2">Type</label>
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

      <div className="h-fit w-full flex lg:gap-7 gap-5 lg:flex-row flex-col py-2 ">
        <div className="rounded-lg  lg:w-1/2 shadow-lg bg-white">
          <div className="flex  justify-between  items-center  px-4  py-2 ">
            <span className=" font-semibold text-gray-600">Milestones</span>
            <div className="border border-gray-400 rounded-lg px-3 py-1">
              <span className="font-light text-gray-400">IN-TRANSIT (463)</span>
            </div>
          </div>

          <div className=" h-full flex justify-center z-0">
            <MilestonesPieChart />
          </div>
        </div>

        <div className="  rounded-lg  lg:w-1/2 shadow-lg bg-white">
          <div className="flex justify-start items-center  px-4  py-3">
            <span className="font-semibold text-gray-700">Timelines</span>
          </div>
          <div className=" h-full flex justify-center">
            <TimelinesPieChart />
          </div>
        </div>
      </div>

      <div className="py-5  justify-between grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
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
                // value={+pageSize}
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
    </>
  );
};

export default AnalyticsSea;
