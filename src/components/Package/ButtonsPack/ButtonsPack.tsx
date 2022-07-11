import React, { FC } from "react";
import s from "./ButtonsPack.module.scss";
import { NavLink } from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";
import { useAppSelector } from "../../../store/hooks";

const ButtonsPack: FC = () => {
  const { infoDevice } = useAppSelector<any>((state) => state.boxes);
  return (
    <div className={s.buttons}>
      <NavLink to={"/"}>
        <MyButton className={"white_btn"}>Назад</MyButton>
      </NavLink>

      {infoDevice !== null && (
        <NavLink to={`/${infoDevice.data.uid}/boxes`}>
          <MyButton className={"green_btn"}>Я хорошо упаковал</MyButton>
        </NavLink>
      )}
    </div>
  );
};

export default ButtonsPack;
