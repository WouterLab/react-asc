import styles from "./Content.module.scss";

export const Content = ({ title, children }) => {
  return (
    <div className={styles.content}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  );
};
