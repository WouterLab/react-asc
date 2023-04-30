import styles from "./Search.module.scss";

export const Search = ({ ...props }) => (
  <input className={styles.input} {...props} />
);
