import styles from "./Footer.module.scss";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../BackButton/BackButton";

export const Footer = ({ noBack }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      {!noBack && <BackButton onClick={() => navigate("/")} />}
      <div className={styles.footer}>
        <a href='https://www.flaticon.com/ru/free-icons/'>
          Иконки от Freepik - Flaticon
        </a>
        <p>
          Изображения: Flaticon.com. Эти карты разработаны с использованием
          ресурсов сайта Flaticon.com.
        </p>
      </div>
    </div>
  );
};
