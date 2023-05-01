import styles from "./AllCards.module.scss";
import { Card } from "../Card/Card";

export const AllCards = ({ cards, isHelpActive }) => {
  return (
    <div className={styles.cardsBlock}>
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}
      </div>
      {isHelpActive && (
        <div className={styles.helpSearch}>
          Используйте поиск для нахождения нужной карты (или просто исплользуйте
          выпадающие списки ниже)
        </div>
      )}
      {isHelpActive && (
        <div className={styles.helpAdd}>
          При клике на нужную карту она отобразится в панели выше (или просто
          перетащите её)
        </div>
      )}
    </div>
  );
};
