import { useState } from "react";
import styles from "./RegBlock.module.scss";
import { Input } from "../../shared/Input/Input";
import { Button } from "../../shared/Button/Button";

export const RegBlock = ({ setCurrentScreen }) => {
  const [regData, setRegData] = useState({
    login: "",
    password: "",
    name: "",
    lastName: "",
    isParent: false,
  });

  return (
    <div>
      <h1 className={styles.loginHeader}>Регистрация:</h1>
      <div>
        <div className={styles.inputWrapper}>
          <Input
            value={regData.login}
            onChange={(e) => setRegData({ ...regData, login: e.target.value })}
            placeholder='Введите логин...'
            primary
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            value={regData.password}
            type='password'
            onChange={(e) =>
              setRegData({ ...regData, password: e.target.value })
            }
            placeholder='Введите пароль...'
            primary
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            value={regData.name}
            type='text'
            onChange={(e) => setRegData({ ...regData, name: e.target.value })}
            placeholder='Введите имя...'
            primary
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            value={regData.lastName}
            type='text'
            onChange={(e) =>
              setRegData({ ...regData, lastName: e.target.value })
            }
            placeholder='Введите фамилию...'
            primary
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type='checkbox'
            checked={regData.isParent}
            onChange={() =>
              setRegData({ ...regData, isParent: !regData.isParent })
            }
            className={styles.checkbox}
          />
          <span className={styles.span}>Я родитель</span>
        </div>
        <div className={styles.buttonWrapper}>
          <Button pink onClick={() => setCurrentScreen("login")}>
            Зарегистрироваться
          </Button>
        </div>
        <div className={styles.hasAccount}>
          <p onClick={() => setCurrentScreen("login")}>
            У меня уже есть аккаунт
          </p>
        </div>
      </div>
    </div>
  );
};
