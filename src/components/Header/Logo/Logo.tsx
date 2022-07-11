import React from "react";
import Logotype from "../../../assets/images/omnicdek_logo_black.svg";
import s from "./Logo.module.scss";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink className={s.link} to={"/"}>
      <img className={s.logo} src={Logotype} alt="" />
    </NavLink>
  );
};

export default Logo;
