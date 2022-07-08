import React from "react";
import s from "./ButtonsPack.module.scss";
import { NavLink } from "react-router-dom";

const ButtonsPack = () => {
  return (
    <div className={s.buttons}>
      <NavLink to={"/"}>
        <button className={s.back}>Назад</button>
      </NavLink>
      <button className={s.agree}>Я хорошо упаковал</button>
    </div>
  );
};

export default ButtonsPack;
