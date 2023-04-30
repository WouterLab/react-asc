import styles from "./Button.module.scss";

export const Button = ({ pink, children, ...props }) => {
  const addStyle = {
    background: "#f2ced1",
    border: "1px solid #cf8989",
  };

  return (
    <button {...props} style={pink && addStyle} className={styles.button}>
      {children}
    </button>
  );
};
