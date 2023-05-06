import { Button } from "../../shared/Button/Button";
import styles from "./Profile.module.scss";
import { useState } from "react";
import { PageContainer } from "../../shared/PageContainer/PageContainer";

export const Profile = () => {
  const [isParent, setIsParent] = useState(true);

  return (
    <PageContainer page='profile' title='Личный кабинет'>
      <div className={styles.buttons}>
        <Button
          onClick={() => setIsParent(true)}
          pink={isParent ? true : false}
          wide
        >
          Родитель
        </Button>
        <Button
          onClick={() => setIsParent(false)}
          pink={!isParent ? true : false}
          wide
        >
          Ребёнок
        </Button>
      </div>
      <div className={styles.data}>
        {isParent ? "info parent" : "info child"}
      </div>
    </PageContainer>
  );
};
