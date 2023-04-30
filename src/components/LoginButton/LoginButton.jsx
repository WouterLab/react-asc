import styles from "./LoginButton.module.scss";
import UserIcon from "../../assets/user.svg";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper} onClick={() => navigate("/profile")}>
      <p className={styles.loginText}>Войти</p>
      <img src={UserIcon} alt='user' className={styles.userImage} />
    </div>
  );
};
