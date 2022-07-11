import React, { FC } from "react";
import s from "./Cards.module.scss";
import purpleCard from "../../../assets/images/purpleCard.svg";
import greenCard from "../../../assets/images/greenCard.svg";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";

const Cards: FC = () => {
  const { infoDevice } = useAppSelector<any>((state) => state.boxes);
  return (
    <article className={s.cards}>
      {infoDevice !== null && (
        <NavLink to={`/${infoDevice.data.uid}/confirm`}>
          <img src={greenCard} alt="send package" />
        </NavLink>
      )}

      <NavLink to={"#"}>
        <img src={purpleCard} alt="return in to shop" />
      </NavLink>
    </article>
  );
};

export default Cards;
