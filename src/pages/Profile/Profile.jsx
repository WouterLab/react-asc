import { Sidebar } from "../../shared/Sidebar/Sidebar";
import { Button } from "../../shared/Button/Button";
import { SmallVector } from "../../shared/SmallVector/SmallVector";
import styles from "./Profile.module.scss";
import { Content } from "../../shared/Content/Content";
import { useState } from "react";

export const Profile = () => {
  const [isParent, setIsParent] = useState(true);

  return (
    <div className={styles.profile}>
      <SmallVector />
      <Sidebar />
      <Content title='Личный кабинет'>
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
      </Content>
    </div>
  );
};
