import styles from "./Input.module.scss";

const Input = ({ primary, ...props }) => {
  return <input {...props} className={styles.input} />;
};

export default Input;
