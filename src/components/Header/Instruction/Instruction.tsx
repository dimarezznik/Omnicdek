import React from "react";
import s from "./Instuction.module.scss";
import {useAppSelector} from "../../../store/hooks";

const Instruction = () => {
const {infoDevice} = useAppSelector<any>(state => state.boxes)

    return (
    <div className={s.options}>
      <span className={s.instruction}>Инструкция</span>
      <span className={s.postomat}>Постомат №{infoDevice !== null && infoDevice.data.device}</span>
    </div>
  );
};

export default Instruction;
