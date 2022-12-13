import Search from "./Search";
import styles from "./SearchBlock.module.scss";
import SearchIcon from "./search.svg";

const SearchBlock = () => {
  return (
    <div className={styles.searchBlock}>
      <img src={SearchIcon} alt='search' className={styles.searchIcon} />
      <Search placeholder='Начните вводить слово... ' />
    </div>
  );
};

export default SearchBlock;
