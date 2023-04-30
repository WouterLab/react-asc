import styles from "./NavButton.module.scss";

export const NavButton = ({ active, children, ...props }) => {
  return (
    <button
      {...props}
      className={`${styles.navButton} ${active ? styles.big : ""}`}
    >
      {children}
    </button>
  );
};
