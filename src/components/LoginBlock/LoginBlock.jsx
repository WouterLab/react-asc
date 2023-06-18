import { Input } from "../../shared/Input/Input";
import styles from "./LoginBlock.module.scss";
import UserIcon from "../../assets/user-icon.svg";
import KeyIcon from "../../assets/key-icon.svg";
import { Button } from "../../shared/Button/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginBlock = ({ loginError, setCurrentScreen, login }) => {
  const [loginData, setLoginData] = useState({
    login: "",
    password: "",
  });
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.loginHeader}>Выполните вход:</h1>
      <div>
        <div className={styles.inputWrapper}>
          <img src={UserIcon} alt='user' className={styles.inputIcon} />
          <Input
            loginError={loginError}
            value={loginData.login}
            onChange={(e) =>
              setLoginData({ ...loginData, login: e.target.value })
            }
            placeholder='Введите логин...'
            primary
          />
        </div>
        <div className={styles.inputWrapper}>
          <img src={KeyIcon} alt='password' className={styles.inputIcon} />
          <Input
            loginError={loginError}
            value={loginData.password}
            type='password'
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            placeholder='Введите пароль...'
            primary
          />
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={() => {
              login(loginData);
              navigate("/");
            }}
            pink
          >
            Войти
          </Button>
          <Button onClick={() => setCurrentScreen("reg")}>Регистрация</Button>
        </div>
      </div>
    </div>
  );
};
