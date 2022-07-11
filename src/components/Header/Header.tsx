import s from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Instruction from "./Instruction/Instruction";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Header: FC = () => {
  const [isLine, setIsLine] = useState(false);
  let url = window.location.pathname.slice(1);
  const href = useParams();

  const setGreenLine = () => {
    if (url.includes("/")) {
      setIsLine(true);
    } else {
      setIsLine(false);
    }
  };

  useEffect(() => {
    setGreenLine();
    console.log(window.location.pathname);
  }, [href]);

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
