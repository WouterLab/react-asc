import styles from "./Button.module.scss";

const Button = ({ pink, children }) => {
  const addStyle = {
    background: "#f2ced1",
    border: "1px solid #cf8989",
  };

  return (
    <button style={pink && addStyle} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
