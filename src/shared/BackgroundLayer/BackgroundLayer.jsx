import styles from "./BackgroundLayer.module.scss";
import Background from "../../assets/bg-vector.svg";
import BackgroundDots from "../../assets/dots-lg.svg";

export const BackgroundLayer = () => {
  return (
    <>
      <img src={Background} className={styles.backgroundLayer} alt='bg-layer' />
      <img
        src={BackgroundDots}
        className={styles.backgroundLayer}
        alt='dots-svg'
      />
    </>
  );
};
