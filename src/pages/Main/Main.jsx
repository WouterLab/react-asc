import CardsBlock from "../../components/CardsBlock/CardsBlock";
import Footer from "../../components/Footer/Footer";
import LoginButton from "../../components/LoginButton/LoginButton";
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import BackgroundLayer from "../../shared/BackgroundLayer/BackgroundLayer";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <BackgroundLayer />
      <header className={styles.header}>
        <div />
        <LoginButton />
      </header>
      <div className={styles.title}>
        <h1 className={styles.firstText}>Альтернативная система</h1>
        <h1 className={styles.secondText}>коммуникации</h1>
      </div>
      <CardsBlock />
      <SearchBlock />
      <Footer />
    </div>
  );
};

export default Main;
