import React, { FC } from "react";
import s from "./Package.module.scss";
import OptionsPack from "./OptionsPack/OptionsPack";
import ButtonsPack from "./ButtonsPack/ButtonsPack";

const Package: FC = () => {
  return (
    <section className={s.confirm_main}>
      <div className={s.container}>
        <div className={s.send_text}>
          <span>Отправление должно быть надежно упаковано</span>
        </div>
        <OptionsPack />
        <ButtonsPack />
      </div>
    </section>
  );
};

export default Package;
