import React from "react";
import s from "./GreenBtn.module.scss";

type Children = {
  children: React.ReactNode;
};

const GreenBtn = (props: Children) => {
  return <button className={s.back}>{props.children}</button>;
};

export default GreenBtn;
