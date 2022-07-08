import React from "react";
import Logotype from "../../../assets/images/omnicdek_logo_black.svg";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to={"/"}>
      <img src={Logotype} alt="" />
    </NavLink>
  );
};

export default Logo;
