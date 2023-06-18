import styles from "./LoginButton.module.scss";
import UserIcon from "../../assets/user.svg";
import { useNavigate } from "react-router-dom";

export const LoginButton = ({ isLogged }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.wrapper}
      onClick={() => navigate(isLogged ? "/profile" : "/login")}
    >
      {!isLogged && <p className={styles.loginText}>Войти</p>}
      <img src={UserIcon} alt='user' className={styles.userImage} />
    </div>
  );
};
