import styles from "./SmallVector.module.scss";
import Background from "../../assets/bg-vector-small.svg";
import BackgroundDots from "../../assets/dots-sm.svg";

export const SmallVector = () => {
  return (
    <>
      <img src={Background} className={styles.smallVector} alt='bg-layer' />
      <img src={BackgroundDots} className={styles.smallVector} alt='bg-layer' />
    </>
  );
};
