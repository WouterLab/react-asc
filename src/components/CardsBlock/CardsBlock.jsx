import styles from "./CardsBlock.module.scss";
import AnimalsImg from "../../assets/lisazayac.png";
import { Card } from "../Card/Card";
import { useDrop } from "react-dnd";
import { useContext } from "react";
import { SelectedCardsContext } from "../../pages/Main/Main";

export const CardsBlock = ({ setIsHelpActive, isHelpActive }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (id) => selectCard(id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [selectedCards, setSelectedCards, selectCard] =
    useContext(SelectedCardsContext);

  return (
    <div className={`${styles.cardsBlock} ${isOver ? styles.over : ""}`}>
      <img
        src={AnimalsImg}
        alt='animals'
        className={styles.animalsImg}
        id='card-block'
      />
      <div className={styles.cards} ref={drop}>
        {selectedCards.length !== 0 &&
          selectedCards.map((card) => (
            <Card key={card.id} card={card} isDeletable />
          ))}
        {selectedCards.length === 0 && (
          <div className={styles.add}>
            Нажимай на карточки снизу или перетаскивай их, чтобы составить
            предложение
          </div>
        )}
      </div>
      <div className={styles.helpWrapper}>
        <div
          className={styles.help}
          onClick={() => setIsHelpActive(!isHelpActive)}
        >
          <span>?</span>
        </div>
        <button className={styles.clear} onClick={() => setSelectedCards([])}>
          Очистить
        </button>
      </div>
      {isHelpActive && (
        <div className={styles.helpClear}>
          Для очищения поля можно использовать кнопку очистить или просто нажать
          на карточку
        </div>
      )}
    </div>
  );
};
