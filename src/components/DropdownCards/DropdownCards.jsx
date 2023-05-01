import styles from "./DropdownCards.module.scss";
import { Card } from "../Card/Card";

export const DropdownCards = ({ cards }) => {
  return (
    <div className={styles.cardsBlock}>
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
