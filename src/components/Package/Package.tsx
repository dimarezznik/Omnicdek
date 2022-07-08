import React from "react";
import Pack from "../../assets/images/package.svg";
import s from "./Package.module.scss";
import { NavLink } from "react-router-dom";

const Package = () => {
  return (
    <section className={s.confirm_main}>
      <div className={s.container}>
        <div className={s.send_text}>
          <span>Отправление должно быть надежно упаковано</span>
        </div>
        <div className={s.instruction_packing}>
          <div>
            <img src={Pack} alt="" />
          </div>
          <ul className={s.instruction_text}>
            <li>
              Упакуйте товар в коробку или пакет. На упаковке не должно быть
              посторонних стикеров и этикеток;
            </li>
            <li>
              Заклейте упаковку скотчем, чтобы не было доступа к вложенным
              предметам;
            </li>
          </ul>
        </div>
        <div className={s.buttons}>
          <NavLink to={"/"}>
            <button className={s.back}>Назад</button>
          </NavLink>
          <button className={s.agree}>Я хорошо упаковал</button>
        </div>
      </div>
    </section>
  );
};

export default Package;
