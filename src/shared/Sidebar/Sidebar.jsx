import styles from "./Sidebar.module.scss";
import Cat from "../../assets/cat.svg";
import { NavButton } from "../NavButton/NavButton";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img src={Cat} className={styles.cat} alt='cat' />
      <NavButton>Карточки</NavButton>
      <NavButton>Помощь</NavButton>
    </div>
  );
};
