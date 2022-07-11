import React, { FC } from "react";
import s from "./Instuction.module.scss";
import { useAppSelector } from "../../../store/hooks";
import { NavLink } from "react-router-dom";

const Instruction: FC = () => {
  const { infoDevice } = useAppSelector<any>((state) => state.boxes);

  return (
    <div className={s.options}>
      <NavLink to={"/error404"} className={s.instruction}>
        Инструкция
      </NavLink>
      <span className={s.postomat}>
        Постомат №{infoDevice !== null && infoDevice.data.device}
      </span>
    </div>
  );
};

export default Instruction;
