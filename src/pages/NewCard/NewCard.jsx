import styles from "./NewCard.module.scss";
import { useState } from "react";
import { Button } from "../../shared/Button/Button";
import { Dropzone } from "../../components/Dropzone/Dropzone";
import { PageContainer } from "../../shared/PageContainer/PageContainer";

export const NewCard = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [cardTitle, setCardTitle] = useState("");
  const [successAdd, setSuccessAdd] = useState(false);

  const uploadLocally = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setCurrentCard(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <PageContainer page='new-card' title='Новая карточка'>
      {currentCard ? (
        <button className={styles.card}>
          <img src={currentCard} alt='card' className={styles.image} />
          <p className={styles.title}>{cardTitle}</p>
        </button>
      ) : (
        <Dropzone onChange={(e) => uploadLocally(e)} />
      )}
      {successAdd ? (
        <div className={styles.successAdd}>Карточка успешно добавлена!</div>
      ) : (
        <>
          <input
            type='text'
            placeholder='Введите название карточки...'
            className={styles.input}
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
          <div className={styles.buttons}>
            <Button>Отмена</Button>
            <div className={styles.help}>?</div>
            <Button pink>Готово</Button>
          </div>
        </>
      )}
    </PageContainer>
  );
};
