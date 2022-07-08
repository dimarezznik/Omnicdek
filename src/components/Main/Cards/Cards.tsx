import React from "react";
import s from "./Cards.module.scss";
import purpleCard from "../../../assets/images/purpleCard.svg";
import greenCard from "../../../assets/images/greenCard.svg";
import { NavLink } from "react-router-dom";

function Cards() {
  return (
    <article className={s.cards}>
      <NavLink to={"/post"}>
        {" "}
        <img src={greenCard} alt="" />{" "}
      </NavLink>

      <img src={purpleCard} alt="" />
    </article>
  );
}

export default Cards;
