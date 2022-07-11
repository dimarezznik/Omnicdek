import React, { FC } from "react";
import GreetingText from "./GreetingText/GreetingText";
import s from "./Main.module.scss";
import Cards from "./Cards/Cards";

const Main: FC = () => {
  return (
    <section className={s.main}>
      <GreetingText />
      <Cards />
    </section>
  );
};

export default Main;
