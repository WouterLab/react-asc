import styles from "./Sidebar.module.scss";
import Cat from "../../assets/cat.svg";
import { NavButton } from "../NavButton/NavButton";
import { BackButton } from "../BackButton/BackButton";
import { useNavigate } from "react-router-dom";

export const Sidebar = ({ activePage }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <img src={Cat} className={styles.cat} alt='cat' />
      <NavButton active={activePage === "cards"} link='/new-card'>
        Карточки
      </NavButton>
      <NavButton active={activePage === "help"} link={"/help"}>
        Помощь
      </NavButton>
      <BackButton onClick={() => navigate("/")} />
    </div>
  );
};
