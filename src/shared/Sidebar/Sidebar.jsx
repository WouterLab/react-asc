import styles from "./Sidebar.module.scss";
import Cat from "../../assets/cat.svg";
import { NavButton } from "../NavButton/NavButton";

export const Sidebar = ({ activePage }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.btnCat}>
        <img src={Cat} className={styles.cat} alt='cat' />
        <NavButton active={activePage === "cards"} link='/cards'>
          Карточки
        </NavButton>
      </div>
      <NavButton active={activePage === "help"} link={"/help"}>
        Помощь
      </NavButton>
    </div>
  );
};
