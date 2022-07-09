import React from "react";
import s from "./ButtonsPack.module.scss";
import { NavLink } from "react-router-dom";
import GreenBtn from "../../UI/GreenBtn/GreenBtn";
import WhiteBtn from "../../UI/WhiteBtn/WhiteBtn";
import {useAppSelector} from "../../../store/hooks";

const ButtonsPack = () => {
    const {infoDevice} = useAppSelector<any>(state => state.boxes)
  return (
    <div className={s.buttons}>
      <NavLink to={"/"}>
        <GreenBtn>Назад</GreenBtn>
      </NavLink>

        {infoDevice !== null &&
            <NavLink to={`/${infoDevice.data.uid}/boxes`}>
                <WhiteBtn>Я хорошо упаковал</WhiteBtn>
            </NavLink>
        }
    </div>
  );
};

export default ButtonsPack;
