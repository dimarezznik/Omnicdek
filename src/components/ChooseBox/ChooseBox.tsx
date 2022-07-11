import React, { useEffect, useState } from "react";
import s from "./ChooseBox.module.scss";
import GreenBtn from "../UI/GreenBtn/GreenBtn";
import WhiteBtn from "../UI/WhiteBtn/WhiteBtn";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchGetPackages } from "../../store/actionCreators";
import BoxItemSmallMid from "./BoxItemSmallMid/BoxItemSmallMid";
import BoxItemLarge from "./BoxItemLarge/BoxItemLarge";

const ChooseBox = () => {
  const { infoDevice } = useAppSelector<any>((state) => state.boxes);
  const { boxesSmallMid } = useAppSelector<any>((state) => state.boxes);
  const { boxesLarge } = useAppSelector<any>((state) => state.boxes);
  const dispatch = useAppDispatch();
  const [activeBtn, setActiveBtn] = useState(true);

  useEffect(() => {
    dispatch(fetchGetPackages());
  }, [dispatch]);

  const isEmptyBox = (
    isNotEmpty: boolean,
    item_large: string,
    setItem: any
  ) => {
    if (isNotEmpty && !item_large.includes("green")) {
      setItem(item_large + " green");
      setActiveBtn(false);
    } else if (!isNotEmpty && !item_large.includes("red")) {
      setItem(item_large + " red");
      setActiveBtn(true);
    }
  };

  return (
    <div className={s.choose_text}>
      <span className={s.text}>Выберите размер посылки</span>
      <div className={s.items}>
        <div className={s.small_mid_items}>
          {boxesSmallMid?.map((box: any, index: number) => (
            <BoxItemSmallMid
              isEmptyBox={isEmptyBox}
              key={box.type}
              isNotEmpty={box.has_empty}
              params={box.params}
              image={box.image}
              index={index}
            />
          ))}
        </div>
        <div className={s.large_items}>
          {boxesLarge?.map((box: any, index: number) => (
            <BoxItemLarge
              isEmptyBox={isEmptyBox}
              key={box.type}
              isNotEmpty={box.has_empty}
              params={box.params}
              image={box.image}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className={s.buttons}>
        {infoDevice !== null && (
          <NavLink to={`/${infoDevice.data.uid}/confirm`}>
            <GreenBtn>Назад</GreenBtn>
          </NavLink>
        )}

        <WhiteBtn activeBtn={activeBtn}>
          <div
            className={s.btn}
            style={!activeBtn ? { opacity: 1 } : { opacity: 0.5 }}
          >
            Подтвердить
          </div>
        </WhiteBtn>
      </div>
    </div>
  );
};

export default ChooseBox;
