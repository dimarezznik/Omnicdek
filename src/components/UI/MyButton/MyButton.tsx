import React from "react";
import "./MyButton.scss";

type Children = {
  activeBtn?: boolean;
  children: React.ReactNode;
  className: string;
};

const MyButton = (props: Children) => {
  return (
    <button className={props.className} disabled={props.activeBtn}>
      {props.children}
    </button>
  );
};

export default MyButton;
