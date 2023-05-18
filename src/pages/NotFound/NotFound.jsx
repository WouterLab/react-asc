import styles from "./NotFound.module.scss";
import { PageContainer } from "../../shared/PageContainer/PageContainer";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => navigate("/"), 3000);
  return (
    <PageContainer page='help' title='Cтраница не найдена'>
      <div className={styles.notfound}>Возврат на главную...</div>
    </PageContainer>
  );
};
