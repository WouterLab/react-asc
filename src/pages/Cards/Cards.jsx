import { useNavigate } from "react-router-dom";
import styles from "./Cards.module.scss";
import { Button } from "../../shared/Button/Button";
import { PageContainer } from "../../shared/PageContainer/PageContainer";

export const Cards = () => {
  const navigate = useNavigate();

  return (
    <PageContainer page='cards' title='Карточки'>
      <div className={styles.container}>
        <p className={styles.title}>Что вы хотите сделать?</p>
        <div className={styles.buttons}>
          <Button onClick={() => navigate("/my-cards")}>
            Посмотреть мои карточки
          </Button>
          <Button onClick={() => navigate("/new-card")}>
            Добавить новую карточку
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};
