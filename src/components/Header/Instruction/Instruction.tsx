import React, { useEffect } from "react";
import s from "./Instuction.module.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { fetchBoxes } from "../../../store/boxesSlice";

const Instruction = () => {
  const dispatch = useAppDispatch();
  const { infoDevice } = useAppSelector<any>((state) => state.boxes);

  useEffect(() => {
    dispatch(fetchBoxes());
    console.log(infoDevice);
  }, []);

  return (
    <div className={s.options}>
      <span className={s.instruction}>Инструкция</span>
      <span className={s.postomat}>Постомат №1234</span>
    </div>
  );
};

export default Instruction;
