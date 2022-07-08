import React from "react";
import s from "./Instuction.module.scss";

const Instruction = () => {
  return (
    <div className={s.options}>
      <span className={s.instruction}>Инструкция</span>
      <span className={s.postomat}>Постомат №1234</span>
    </div>
  );
};

export default Instruction;
