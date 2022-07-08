import React from "react";
import s from "./ChooseBox.module.scss";
import GreenBtn from "../UI/GreenBtn/GreenBtn";
import WhiteBtn from "../UI/WhiteBtn/WhiteBtn";
import { NavLink } from "react-router-dom";

const ChooseBox = () => {
  return (
    <div className={s.choose_text}>
      <span className={s.text}>Выберите размер посылки</span>
      <div>
        <div>123</div>
      </div>
      <div className={s.buttons}>
        <NavLink to={"/confirm"}>
          <GreenBtn>Назад</GreenBtn>
        </NavLink>
        <WhiteBtn>Подтвердить</WhiteBtn>
      </div>
    </div>
  );
};

export default ChooseBox;
