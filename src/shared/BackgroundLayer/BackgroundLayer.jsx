import styles from "./BackgroundLayer.module.scss";
import Background from "../../assets/bg-vector.svg";

export const BackgroundLayer = () => {
  return (
    <img src={Background} className={styles.backgroundLayer} alt='bg-layer' />
  );
};
