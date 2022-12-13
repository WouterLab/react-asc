import styles from "./LoginButton.module.scss";
import UserIcon from "../../assets/user.svg";

const LoginButton = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.loginText}>Войти</p>
      <img src={UserIcon} alt='user' className={styles.userImage} />
    </div>
  );
};

export default LoginButton;
