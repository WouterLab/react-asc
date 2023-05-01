import { useContext } from "react";
import styles from "./Card.module.scss";
import { useDrag } from "react-dnd";
import { SelectedCardsContext } from "../../pages/Main/Main";

export const Card = ({ card, isDeletable }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: card.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [selectedCards, setSelectedCards] = useContext(SelectedCardsContext);

  const deleteCard = (cardId) => {
    if (isDeletable) {
      const arrayWithoutCard = selectedCards.filter(
        (card) => card.id !== cardId,
      );
      setSelectedCards(arrayWithoutCard);
    } else return;
  };

  const handleClick = (id) => {
    if (isDeletable) deleteCard(id);
    else setSelectedCards((prevSelectedCards) => [...prevSelectedCards, card]);
  };

  return (
    <button
      className={`${styles.card} ${isDragging ? styles.drag : ""} ${
        isDeletable ? styles.chosen : ""
      }`}
      ref={!isDeletable ? drag : null}
      onClick={() => handleClick(card.id)}
    >
      <img src={card.image} alt={"card-" + card.title} />
      <p className={styles.title}>{card.title}</p>
    </button>
  );
};
