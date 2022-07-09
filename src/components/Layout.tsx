import React, {FC} from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

export interface IInfoDevice {
    infoDevice: any
}

const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  );
};

export default Layout;
