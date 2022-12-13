import styles from "./Card.module.scss";

const Card = ({ image, name }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={"card-" + name} />
    </div>
  );
};

export default Card;
