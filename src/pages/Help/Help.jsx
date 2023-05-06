import styles from "./Help.module.scss";
import { PageContainer } from "../../shared/PageContainer/PageContainer";

export const Help = () => {
  return (
    <PageContainer page='help' title='Помощь'>
      <div className={styles.container}>help</div>
    </PageContainer>
  );
};
