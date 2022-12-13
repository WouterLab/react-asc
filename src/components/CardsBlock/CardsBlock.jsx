import styles from "./CardsBlock.module.scss";
import AnimalsImg from "../../assets/lisazayac.png";
import Card from "../Card/Card";
import YesCard from "./cards/yes.png";

const CardsBlock = () => {
  const cards = [
    {
      id: 0,
      image: YesCard,
      name: "Да",
    },
  ];

  return (
    <div className={styles.cardsBlock}>
      <img src={AnimalsImg} alt='animals' className={styles.animalsImg} />
      {cards.map((card) => (
        <Card key={card.id} image={card.image} name={card.name} />
      ))}
    </div>
  );
};

export default CardsBlock;
