import React from "react";
import s from "./GreetingText.module.scss";

const GreetingText = () => {
  return (
    <article className={s.greeting_text}>
      <span className={s.greeting}>Приветствуем Вас!</span>
      <span className={s.question}>Что будем отправлять сегодня?</span>
    </article>
  );
};

export default GreetingText;
