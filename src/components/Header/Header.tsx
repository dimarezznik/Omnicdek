import s from "./Header.module.scss";
import Logo from "./Logo/Logo";
import Instruction from "./Instruction/Instruction";

const Header = () => {

    return (
        <header className={s.header}>
            <Logo/>
            <Instruction/>
        </header>
    );
};

export default Header;
