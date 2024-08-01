import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "../Pages/Dashboard";
import Analytics from "../Pages/Analytics";

const Layout = () => {
  return (
    <>
      <div className="flex">
        <Navbar />
        <Outlet />
      {/* <Dashboard /> */}
      </div>

      {/* <Analytics /> */}
    </>
  );
};

export default Layout;
