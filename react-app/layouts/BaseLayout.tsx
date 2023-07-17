import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "./Navbar";

const BaseLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default BaseLayout;
