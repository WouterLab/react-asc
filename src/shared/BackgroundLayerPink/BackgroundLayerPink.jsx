import styles from "./BackgroundLayerPink.module.scss";
import Background from "../../assets/bg-vector-pink.svg";
import BackgroundDots from "../../assets/dots-md.svg";

export const BackgroundLayerPink = () => {
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
