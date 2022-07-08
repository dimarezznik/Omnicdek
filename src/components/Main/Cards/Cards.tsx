import React from "react";
import s from "./Cards.module.scss";
import purpleCard from "../../../assets/images/purpleCard.svg";
import greenCard from "../../../assets/images/greenCard.svg";
import { NavLink } from "react-router-dom";

function Cards() {
  return (
    <article className={s.cards}>
      <NavLink to={"/confirm"}>
        <img src={greenCard} alt="send package" />
      </NavLink>

      <img src={purpleCard} alt="return in to shop" />
    </article>
  );
}

export default Cards;
