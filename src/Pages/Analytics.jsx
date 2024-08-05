import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { HiTruck } from "react-icons/hi";
import { IoAirplaneOutline, IoNotificationsOutline } from "react-icons/io5";
import { LuShip } from "react-icons/lu";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";

const Analytics = () => {
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

        <div className="flex flex-row justify-center  py-5 gap-3 ">
          <NavLink
            className={({ isActive }) =>
              `border-b-2  gap-2 py-1 basis-16 flex flex-row ${
                isActive
                  ? " border-orange-400 text-orange-700"
                  : "text-gray-500 w-full"
              }`
            }
            to="/analytics/sea"
          >
            <LuShip size={20} />
            <span>Sea</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `border-b-2 justify-center items-center  gap-2 py-1 basis-16 flex flex-row ${
                isActive
                  ? " border-orange-400 text-orange-700 "
                  : "text-gray-500 w-full"
              }`
            }
            to="/analytics/air"
          >
            <IoAirplaneOutline size={20} />
            <span>Air</span>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `border-b-2 justify-center items-center gap-2 py-1 basis-16 flex flex-row ${
                isActive
                  ? " border-orange-400 text-orange-700"
                  : "text-gray-500 w-full"
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
      </div>
    </>
  );
};

export default Analytics;
