import { BackgroundLayer } from "../../shared/BackgroundLayer/BackgroundLayer";
import { CardsBlock } from "../../components/CardsBlock/CardsBlock";
import styles from "./Main.module.scss";
import { LoginButton } from "../../components/LoginButton/LoginButton";
import { SearchBlock } from "../../components/SearchBlock/SearchBlock";
import { Footer } from "../../components/Footer/Footer";
import { AllCards } from "../../components/AllCards/AllCards";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { allCards } from "../../data/allCards";
import { easyPhrases } from "../../data/easyPhrases";
import { nouns } from "../../data/nouns";
import { verbs } from "../../data/verbs";
import { adjectives } from "../../data/adjectives";
export const SelectedCardsContext = createContext();

export const Main = () => {
  const [searchText, setSearchText] = useState("");
  const [cardList, setCardList] = useState(allCards);
  const [selectedCards, setSelectedCards] = useState([]);
  const [isHelpActive, setIsHelpActive] = useState(false);

  const uniqueIdCounter = useRef(0);

  const selectCard = useCallback(
    ({ id }) => {
      const copyCards = cardList.map((obj) => ({ ...obj }));
      const foundItem = copyCards.filter((el) => el.id === id)[0];
      const uniqueId = uniqueIdCounter.current++;
      foundItem.id = `${id}-${uniqueId}`;
      setSelectedCards((prevSelectedCards) => [
        ...prevSelectedCards,
        foundItem,
      ]);
    },
    [cardList, uniqueIdCounter],
  );

  useEffect(() => {
    const filteredCards = allCards.filter(
      (card) =>
        card.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1,
    );
    setCardList(filteredCards);
  }, [searchText]);

  return (
    <SelectedCardsContext.Provider
      value={[selectedCards, setSelectedCards, selectCard]}
    >
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
        <CardsBlock
          isHelpActive={isHelpActive}
          setIsHelpActive={setIsHelpActive}
        />
        <SearchBlock searchText={searchText} setSearchText={setSearchText} />
        <AllCards cards={cardList} isHelpActive={isHelpActive} />
        <Dropdown title='Простые фразы' cards={easyPhrases} />
        <Dropdown title='Существительные' cards={nouns} />
        <Dropdown title='Глаголы' cards={verbs} />
        <Dropdown title='Прилагательные' cards={adjectives} />
        <Footer />
      </div>
    </SelectedCardsContext.Provider>
  );
};
