import React, { useEffect } from "react";
import s from "./ChooseBox.module.scss";
import GreenBtn from "../UI/GreenBtn/GreenBtn";
import WhiteBtn from "../UI/WhiteBtn/WhiteBtn";
import { NavLink } from "react-router-dom";

const ChooseBox = () => {
  const Test = async () => {
    try {
      const res = await fetch(
        "https://dev.hub.omnic.solutions/api/2.0.0/public/device/34670a76-6022-4df5-ac1d-68f88589c904/ "
      );
      return res.json();
    } catch (e) {
      console.log(e);
    }
  };

  const Test2 = async () => {
    try {
      const res = await fetch(
        "https://dev.hub.omnic.solutions/api/2.0.0/public/orders/device/34670a76-6022-4df5-ac1d-68f88589c904/cells/statuses/?type=5"
      );
      return res.json();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    Test().then((r) => console.log(r));
    Test2().then((r) => console.log(r));
  }, []);

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
