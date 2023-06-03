import { useState } from "react";
import styles from "./Dropdown.module.scss";
import ArrowSvg from "./assets/arrow.svg";
import { DropdownCards } from "../DropdownCards/DropdownCards";

export const Dropdown = ({ title, cards }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.dropdown} onClick={() => setIsOpened(!isOpened)}>
        <img
          src={ArrowSvg}
          alt='arrow'
          className={isOpened ? styles.reverse : styles.arrow}
        />
        <p className={styles.title}>{title}</p>
      </div>
      {isOpened && (
        <div className={styles.cardList}>
          <DropdownCards cards={cards} />
        </div>
      )}
    </div>
  );
};
