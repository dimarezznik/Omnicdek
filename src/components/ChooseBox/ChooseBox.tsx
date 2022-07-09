import React, {useEffect} from "react";
import s from "./ChooseBox.module.scss";
import GreenBtn from "../UI/GreenBtn/GreenBtn";
import WhiteBtn from "../UI/WhiteBtn/WhiteBtn";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../store/hooks";

const ChooseBox = () => {
    const {infoDevice} = useAppSelector<any>(state => state.boxes)

    return (
        <div className={s.choose_text}>
            <span className={s.text}>Выберите размер посылки</span>
            <div>
                <div>123</div>
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
