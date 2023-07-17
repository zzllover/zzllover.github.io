import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

const BaseLayout = () => {
  return (
    <div className="h-screen w-full static  bg-slate-50  flex flex-col overflow-hidden">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
