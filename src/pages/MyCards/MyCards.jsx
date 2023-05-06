import styles from "./MyCards.module.scss";
import { PageContainer } from "../../shared/PageContainer/PageContainer";

export const MyCards = () => {
  return (
    <PageContainer page='my-cards' title='Мои карточки'>
      <div className={styles.container}>
        <div className={styles.card}>card</div>
        <div className={styles.card}>card</div>
        <div className={styles.card}>card</div>
        <div className={styles.card}>card</div>
        <div className={styles.card}>card</div>
        <div className={styles.card}>card</div>
      </div>
    </PageContainer>
  );
};
