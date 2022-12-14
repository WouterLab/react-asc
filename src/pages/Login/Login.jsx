import LoginBlock from "../../components/LoginBlock/LoginBlock";
import styles from "./Login.module.scss";
import PigPng from "../../assets/pig.png";
import BackgroundLayer from "../../shared/BackgroundLayer/BackgroundLayer";

const Login = ({ login, loginError }) => {
  return (
    <div className={styles.wrapper}>
      <BackgroundLayer />
      <LoginBlock login={login} loginError={loginError} />
      <img src={PigPng} className={styles.pigImage} alt='pig' />
    </div>
  );
};

export default Login;
