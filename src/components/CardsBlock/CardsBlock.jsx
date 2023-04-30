import styles from "./CardsBlock.module.scss";
import AnimalsImg from "../../assets/lisazayac.png";
import { Card } from "../Card/Card";
import { useDrop } from "react-dnd";
import { useState } from "react";

export const CardsBlock = ({ cards }) => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "div",
    drop: (item) => selectCard(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const selectCard = ({ id }) => {
    const itemFind = cards.filter((el) => el.id === id)[0];
    const newArr = selectedCards;
    newArr.push(itemFind);
    setSelectedCards(newArr);
  };

  return (
    <div className={`${styles.cardsBlock} ${isOver ? styles.over : ""}`}>
      <img src={AnimalsImg} alt='animals' className={styles.animalsImg} />
      <div className={styles.cards} ref={drop}>
        {selectedCards.map((card) => (
          <Card key={card.id} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};
