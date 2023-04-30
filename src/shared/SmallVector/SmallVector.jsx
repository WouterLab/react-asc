import styles from "./SmallVector.module.scss";
import Background from "../../assets/bg-vector-small.svg";

export const SmallVector = () => {
  return <img src={Background} className={styles.smallVector} alt='bg-layer' />;
};
