import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <a href='https://www.flaticon.com/ru/free-icons/'>
        Иконки от Freepik - Flaticon
      </a>
      <p>
        Изображения: Flaticon.com. Эти карты разработаны с использованием
        ресурсов сайта Flaticon.com.
      </p>
    </div>
  );
};
