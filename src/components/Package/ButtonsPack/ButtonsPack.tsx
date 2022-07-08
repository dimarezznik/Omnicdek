import React from "react";
import s from "./ButtonsPack.module.scss";
import { NavLink } from "react-router-dom";
import GreenBtn from "../../UI/GreenBtn/GreenBtn";
import WhiteBtn from "../../UI/WhiteBtn/WhiteBtn";

const ButtonsPack = () => {
  return (
    <div className={s.buttons}>
      <NavLink to={"/"}>
        <GreenBtn>Назад</GreenBtn>
      </NavLink>
      <NavLink to={"/boxes"}>
        <WhiteBtn>Я хорошо упаковал</WhiteBtn>
      </NavLink>
    </div>
  );
};

export default ButtonsPack;
