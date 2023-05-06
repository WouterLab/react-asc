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
    const files = event.target.files;
    if (files && files.length > 0) {
      setCurrentCard(files[0]);
    }
  };

  return (
    <PageContainer page='new-card' title='Новая карточка'>
      <Dropzone onChange={(e) => uploadLocally(e)} />
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
