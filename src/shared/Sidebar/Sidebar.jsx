import styles from "./Sidebar.module.scss";
import Cat from "../../assets/cat.svg";
import { NavButton } from "../NavButton/NavButton";
import { BackButton } from "../BackButton/BackButton";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <img src={Cat} className={styles.cat} alt='cat' />
      <NavButton>Карточки</NavButton>
      <NavButton>Помощь</NavButton>
      <BackButton onClick={() => navigate("/")} />
    </div>
  );
};
