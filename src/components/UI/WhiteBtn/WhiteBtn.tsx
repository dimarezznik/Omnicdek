import React from "react";
import s from "./WhiteBtn.module.scss";

type Children = {
  children: React.ReactNode;
};

const WhiteBtn = (props: Children) => {
  return <button className={s.agree}>{props.children}</button>;
};

export default WhiteBtn;
