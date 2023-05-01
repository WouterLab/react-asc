import styles from "./Button.module.scss";

export const Button = ({ pink, wide, children, ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${pink ? styles.pinkButton : ""} ${
        wide ? styles.wideButton : ""
      }`}
    >
      {children}
    </button>
  );
};
