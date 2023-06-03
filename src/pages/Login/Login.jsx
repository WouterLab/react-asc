import { LoginBlock } from "../../components/LoginBlock/LoginBlock";
import styles from "./Login.module.scss";
import PigPng from "../../assets/pig.png";
import { BackgroundLayer } from "../../shared/BackgroundLayer/BackgroundLayer";
import { useState } from "react";
import { RegBlock } from "../../components/RegBlock/RegBlock";

export const Login = ({ login, loginError }) => {
  const [currentScreen, setCurrentScreen] = useState("login");

  return (
    <div className={styles.wrapper}>
      <BackgroundLayer />
      {currentScreen === "login" ? (
        <LoginBlock
          loginError={loginError}
          login={login}
          setCurrentScreen={setCurrentScreen}
        />
      ) : (
        <RegBlock setCurrentScreen={setCurrentScreen} login={login} />
      )}
      <img src={PigPng} className={styles.pigImage} alt='pig' />
    </div>
  );
};
