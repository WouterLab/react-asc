import Button from "../../shared/Button/Button";
import Input from "../../shared/Input/Input";
import styles from "./LoginBlock.module.scss";
import UserIcon from "../../assets/user-icon.svg";
import KeyIcon from "../../assets/key-icon.svg";

const LoginBlock = () => {
  return (
    <div>
      <h1 className={styles.loginHeader}>Выполните вход:</h1>
      <div>
        <div className={styles.inputWrapper}>
          <img src={UserIcon} alt='user' className={styles.inputIcon} />
          <Input placeholder='Введите логин...' primary />
        </div>
        <div className={styles.inputWrapper}>
          <img src={KeyIcon} alt='password' className={styles.inputIcon} />
          <Input placeholder='Введите пароль...' primary />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button pink>Войти</Button>
        <Button>Регистрация</Button>
      </div>
    </div>
  );
};

export default LoginBlock;
