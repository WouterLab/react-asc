import styles from "./BackButton.module.scss";
import Back from "../../assets/back.svg";

export const BackButton = ({ ...props }) => {
  return <img src={Back} className={styles.backButton} alt='back' {...props} />;
};
