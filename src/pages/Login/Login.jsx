import LoginBlock from "../../components/LoginBlock/LoginBlock";
import styles from "./Login.module.scss";
import BackgroundLayer from "../../assets/bg-vector.svg";
import PigPng from "../../assets/pig.png";

const Login = ({ login }) => {
  return (
    <div className={styles.wrapper}>
      <img
        src={BackgroundLayer}
        className={styles.backgroundLayer}
        alt='bg-layer'
      />
      <LoginBlock />
      <img src={PigPng} className={styles.pigImage} alt='pig' />
    </div>
  );
};

export default Login;
