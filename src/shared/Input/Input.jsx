import styles from "./Input.module.scss";

export const Input = ({ primary, loginError, ...props }) => {
  const errorStyles = {
    border: loginError ? "1px solid red" : "1px solid #715e8c",
  };

  return <input {...props} style={errorStyles} className={styles.input} />;
};
