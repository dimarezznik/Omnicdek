import React, {useEffect} from "react";
import s from "./ChooseBox.module.scss";
import GreenBtn from "../UI/GreenBtn/GreenBtn";
import WhiteBtn from "../UI/WhiteBtn/WhiteBtn";
import {NavLink} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchGetPackages } from "../../store/actionCreators";
import BoxItem from "./BoxItem/BoxItem";

const ChooseBox = () => {
  const {infoDevice} = useAppSelector<any>(state => state.boxes)
  const {boxes} = useAppSelector<any>(state => state.boxes)
  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch(fetchGetPackages())
  }, [dispatch])

    return (
        <div className={s.choose_text}>
            <span className={s.text}>Выберите размер посылки</span>
            <div className={s.items}>
              {boxes?.map((box: any, index: number) => <BoxItem key={box.type}
                                                                isEmpty={box.has_empty}
                                                                params={box.params}
                                                                image={box.image}
                                                                index={index}/>)}

            </div>
            <div className={s.buttons}>

                {infoDevice !== null &&
                    <NavLink to={`/${infoDevice.data.uid}/confirm`}>
                        <GreenBtn>Назад</GreenBtn>
                    </NavLink>}

                <WhiteBtn>Подтвердить</WhiteBtn>
            </div>
        </div>
    );
};

export default ChooseBox;
