import React, { useState } from "react";
import { FaAngleDown, FaHistory, FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdArchive,
  MdDashboard,
  MdEditDocument,
  MdFolderShared,
} from "react-icons/md";
import { RiStoreFill } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(true);

  function handleToggle() {
    setIsTrue((prev) => !prev);
  }
  return (
    <>
      <div className="fixed">
        <div className="relative bg-gray-200 outline-none  rounded-2xl ">
          <div className=" z-20 flex justify-center items-center lg:hidden absolute top-4 left-3">
            <GiHamburgerMenu size={25} onClick={handleToggle} color="orange" />
          </div>
          <div
            className={
              isTrue
                ? " text-[12px] max-w-44 bg-[#72120b] rounded-r-2xl px-4 py-12 flex flex-col justify-center items-start gap-4 transition-all duration-300"
                : "max-w-0 hidden transition-all duration-300 "
            }
          >
            <NavLink
              className={({ isActive }) =>
                `font-semibold ${
                  isActive
                    ? " w-full bg-[#85170d] rounded-lg"
                    : "text-white w-full"
                }`
              }
              to="/"
            >
              <div className=" flex items-center justify-start w-full text-white py-2 px-2  rounded-lg  hover:cursor-pointer hover:bg-[#85170d] gap-1">
                <div className="flex justify-start gap-2">
                  <MdDashboard color="white" size={17} />
                  <span>Dashboard</span>
                </div>
              </div>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `font-semibold ${
                  isActive
                    ? " w-full bg-[#85170d] rounded-lg"
                    : "text-white w-full"
                }`
              }
              to="/analytics/sea"
            >
              <div className="flex items-center justify-start w-full text-white py-2  px-2 rounded-lg  hover:cursor-pointer hover:bg-[#85170d] gap-1">
                <div className="flex justify-start gap-2">
                  <SiSimpleanalytics color="white" size={17} />
                  <span>Analytics</span>
                </div>
              </div>
            </NavLink>

            {/* 

          <div className="flex items-center justify-start w-full text-white py-2  px-2 rounded-lg  hover:cursor-pointer hover:bg-[#85170d] gap-1">
            <div className="flex justify-start gap-2">
              <SiSimpleanalytics color="white" size={17} />
              <span>Analytics</span>
            </div>
          </div> */}

            <div className="flex items-center w-full  justify-start text-white py-2  px-2 rounded-lg  hover:cursor-pointer hover:bg-[#85170d] gap-1">
              <div className="flex justify-start items-center w-full gap-2 text-nowrap">
                <MdEditDocument color="white" size={17} />
                <span>Rate Request</span>
              </div>
              <FaAngleDown />
            </div>

            <div className="flex items-center justify-start w-full text-white py-2  px-2   rounded-lg  hover:cursor-pointer hover:bg-[#85170d] gap-1">
              <div className="flex justify-start items-center w-full gap-2">
                <MdFolderShared color="white" size={17} />
                <span>Quote</span>
              </div>
              <FaAngleDown />
            </div>

            <div className="flex items-center w-full justify-start text-white py-2  px-2   rounded-lg  hover:cursor-pointer hover:bg-[#85170d] gap-1">
              <div className="flex justify-start gap-2">
                <RiStoreFill color="white" size={17} />
                <span>Shipments</span>
              </div>
            </div>

            <div className="flex items-center justify-start w-full text-white py-2  px-2   rounded-lg  hover:cursor-pointer hover:bg-[#85170d] gap-1">
              <div className="flex justify-start gap-2">
                <FaRegUserCircle color="white" size={17} />
                <span>User List</span>
              </div>
            </div>

            <div className="flex items-center justify-start w-full text-white py-2  px-2  rounded-lg  hover:cursor-pointer hover:bg-[#85170d] gap-1">
              <div className="flex justify-start items-center w-full gap-2">
                <MdArchive color="white" size={17} />
                <span>Archive</span>
              </div>
              <FaAngleDown />
            </div>

            <div className="flex items-center justify-start w-full text-white py-2  px-2   rounded-lg  hover:cursor-pointer hover:bg-[#85170d] gap-1">
              <div className="flex justify-start gap-2">
                <FaHistory color="white" size={17} />
                <span>History</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
