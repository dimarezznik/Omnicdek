import React from "react";
import s from "./Instuction.module.scss";

const Instruction = () => {
  return (
    <div className={s.options}>
      <div className={s.instruction}>Инструкция</div>
      <div className={s.postomat}>Постомат №1234</div>
    </div>
  );
};

export default Instruction;
