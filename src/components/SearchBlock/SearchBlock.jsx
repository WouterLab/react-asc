import { Search } from "./Search";
import styles from "./SearchBlock.module.scss";
import SearchIcon from "./search.svg";

export const SearchBlock = ({ searchText, setSearchText }) => {
  return (
    <div className={styles.searchBlock}>
      <img src={SearchIcon} alt='search' className={styles.searchIcon} />
      <Search
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder='Начните вводить слово... '
      />
    </div>
  );
};
