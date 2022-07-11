import s from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Instruction from "./Instruction/Instruction";
import { FC, useEffect, useState } from "react";

const Header: FC = () => {
  const [isLine, setIsLine] = useState(false);
  const url = window.location.pathname.slice(1);

  const setGreenLine = () => {
    if (url.includes("/")) {
      setIsLine(true);
    } else {
      setIsLine(false);
    }
  };

  useEffect(() => {
    setGreenLine();
  }, [url]);

  return (
    <>
      <header className={s.header}>
        <Logo />
        <Instruction />
      </header>
      {isLine && (
        <div className={s.line}>
          <div className={s.green_line}></div>
        </div>
      )}
    </>
  );
};

export default Header;
