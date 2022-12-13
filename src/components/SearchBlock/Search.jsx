import styles from "./Search.module.scss";

const Search = ({ ...props }) => {
  return <input className={styles.input} {...props} />;
};

export default Search;
