import React from "react";
import s from "./WhiteBtn.module.scss";

type Children = {
  children: React.ReactNode;
  activeBtn?: boolean;
};

const WhiteBtn = (props: Children) => {
  return (
    <button className={s.agree} disabled={props.activeBtn}>
      {props.children}
    </button>
  );
};

export default WhiteBtn;
