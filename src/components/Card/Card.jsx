import styles from "./Card.module.scss";
import { useDrag } from "react-dnd";

export const Card = ({ image, title, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      className={`${styles.card} ${isDragging ? styles.drag : ""}`}
      ref={drag}
    >
      <img src={image} alt={"card-" + title} />
      <p className={styles.title}>{title}</p>
    </div>
  );
};
