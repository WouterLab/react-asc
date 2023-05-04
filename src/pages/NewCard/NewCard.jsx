import { Sidebar } from "../../shared/Sidebar/Sidebar";
import { SmallVector } from "../../shared/SmallVector/SmallVector";
import styles from "./NewCard.module.scss";
import { Content } from "../../shared/Content/Content";
import { useState } from "react";
import { Button } from "../../shared/Button/Button";
import { Dropzone } from "../../components/Dropzone/Dropzone";

export const NewCard = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const [cardTitle, setCardTitle] = useState("");

  const uploadLocally = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setCurrentCard(files[0]);
    }
  };

  return (
    <div className={styles.newCard}>
      <SmallVector />
      <Sidebar activePage='cards' />
      <Content title='Новая карточка'>
        <Dropzone onChange={(e) => uploadLocally(e)} />
        {currentCard && currentCard.name}
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
      </Content>
    </div>
  );
};
