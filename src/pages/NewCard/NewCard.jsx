import styles from "./NewCard.module.scss";
import { useState } from "react";
import { Button } from "../../shared/Button/Button";
import { Dropzone } from "../../components/Dropzone/Dropzone";
import { PageContainer } from "../../shared/PageContainer/PageContainer";

export const NewCard = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [cardTitle, setCardTitle] = useState("");
  const [successAdd, setSuccessAdd] = useState(false);
  const [isHelpActive, setIsHelpActive] = useState(false);

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
        <div className={styles.dropzone}>
          {isHelpActive && (
            <div className={`${styles.info} ${styles.infoImg}`}>
              Добавьте
              <br />
              изображение для
              <br />
              карточки
            </div>
          )}
          <Dropzone onChange={(e) => uploadLocally(e)} />
          {isHelpActive && (
            <div className={`${styles.info} ${styles.infoTitle}`}>
              Введите название
              <br />
              для будущей
              <br />
              карточки
            </div>
          )}
        </div>
      )}
      {successAdd ? (
        <div className={styles.successAdd}>Карточка успешно добавлена!</div>
      ) : (
        <div className={styles.controls}>
          <input
            type='text'
            placeholder='Введите название карточки...'
            className={styles.input}
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
          <div className={styles.buttons}>
            <Button>Отмена</Button>
            {isHelpActive && (
              <div className={`${styles.info} ${styles.infoDone}`}>
                Нажмите кнопку
                <br />
                “Готово” для
                <br />
                подтверждения
              </div>
            )}
            <div
              className={styles.help}
              onClick={() => setIsHelpActive(!isHelpActive)}
            >
              ?
            </div>
            <Button pink onClick={() => setSuccessAdd(true)}>
              Готово
            </Button>
            {isHelpActive && (
              <div className={`${styles.info} ${styles.infoCancel}`}>
                Или нажмите
                <br />
                "Отмена"
                <br />
                для сброса
              </div>
            )}
          </div>
        </div>
      )}
    </PageContainer>
  );
};
