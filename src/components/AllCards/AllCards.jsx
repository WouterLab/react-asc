import styles from "./AllCards.module.scss";
import { Card } from "../Card/Card";

export const AllCards = ({ cards }) => {
  return (
    <div className={styles.cardsBlock}>
      <div className={styles.cards}>
        {cards.map((card) => (
          <Card
            id={card.id}
            key={card.id}
            image={card.image}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};
