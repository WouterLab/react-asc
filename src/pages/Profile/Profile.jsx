import { Button } from "../../shared/Button/Button";
import styles from "./Profile.module.scss";
import { useState } from "react";
import { PageContainer } from "../../shared/PageContainer/PageContainer";
import ProfileIcon from "../../assets/profile.svg";
import { Input } from "../../shared/Input/Input";

export const Profile = () => {
  const [isParent, setIsParent] = useState(true);

  const [parentInfo, setParentInfo] = useState({
    name: "Наталья",
    email: "email@pochta.ru",
    phone: "+7 (999) 000 00 00",
    city: "Санкт-Петербург",
  });

  const [childInfo, setChildInfo] = useState({
    name: "Артём",
    age: 6,
    phone: "+7 (999) 000 99 99",
  });

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
        {isParent ? (
          <div className={styles.info}>
            <img src={ProfileIcon} alt='profile' className={styles.image} />
            <div className={styles.infoBlock}>
              <div className={styles.row}>
                <p>Имя:</p>
                <Input
                  className={styles.input}
                  value={parentInfo.name}
                  onChange={(e) =>
                    setParentInfo({ ...parentInfo, name: e.target.value })
                  }
                  placeholder='Введите имя'
                />
              </div>
              <div className={styles.row}>
                <p>Email:</p>
                <Input
                  className={styles.input}
                  value={parentInfo.email}
                  onChange={(e) =>
                    setParentInfo({ ...parentInfo, email: e.target.value })
                  }
                  placeholder='Введите Email'
                />
              </div>
              <div className={styles.row}>
                <p>Телефон:</p>
                <Input
                  className={styles.input}
                  value={parentInfo.phone}
                  onChange={(e) =>
                    setParentInfo({ ...parentInfo, phone: e.target.value })
                  }
                  placeholder='Введите телефон'
                />
              </div>
              <div className={styles.row}>
                <p>Город:</p>
                <Input
                  className={styles.input}
                  value={parentInfo.city}
                  onChange={(e) =>
                    setParentInfo({ ...parentInfo, city: e.target.value })
                  }
                  placeholder='Введите город'
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.info}>
            <img src={ProfileIcon} alt='profile' className={styles.image} />
            <div className={styles.infoBlock}>
              <div className={styles.row}>
                <p>Имя:</p>
                <Input
                  className={styles.input}
                  value={childInfo.name}
                  onChange={(e) =>
                    setChildInfo({ ...childInfo, name: e.target.value })
                  }
                  placeholder='Введите имя'
                />
              </div>
              <div className={styles.row}>
                <p>Возраст:</p>
                <Input
                  className={styles.input}
                  value={childInfo.age}
                  onChange={(e) =>
                    setChildInfo({ ...childInfo, age: e.target.value })
                  }
                  type='number'
                  placeholder='Введите возраст'
                />
              </div>
              <div className={styles.row}>
                <p>Телефон:</p>
                <Input
                  className={styles.input}
                  value={childInfo.phone}
                  onChange={(e) =>
                    setChildInfo({ ...childInfo, phone: e.target.value })
                  }
                  placeholder='Введите телефон'
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
};
