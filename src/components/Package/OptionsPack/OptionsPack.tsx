import React, { FC } from "react";
import s from "./OptionsPack.module.scss";
import Pack from "../../../assets/images/package.svg";

const OptionsPack: FC = () => {
  return (
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
  );
};

export default OptionsPack;
