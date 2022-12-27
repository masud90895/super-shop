import React from "react";
import { Outlet } from "react-router-dom";
import ButtomContactButton from "../Components/Shared/ButtomContactButton";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet />
      <Footer />
      <ButtomContactButton/>
    </div>
  );
};

export default Main;
