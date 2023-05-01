import { BackgroundLayer } from "../../shared/BackgroundLayer/BackgroundLayer";
import { CardsBlock } from "../../components/CardsBlock/CardsBlock";
import styles from "./Main.module.scss";
import { LoginButton } from "../../components/LoginButton/LoginButton";
import { SearchBlock } from "../../components/SearchBlock/SearchBlock";
import { Footer } from "../../components/Footer/Footer";
import { AllCards } from "../../components/AllCards/AllCards";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import YesCard from "../../assets/cards/yes.png";
import { createContext, useCallback, useEffect, useRef, useState } from "react";

const cards = [
  {
    id: "yes",
    image: YesCard,
    title: "Да",
  },
  {
    id: "no",
    image: YesCard,
    title: "Нет",
  },
  {
    id: "dn",
    image: YesCard,
    title: "Не знаю",
  },
  {
    id: "who",
    image: YesCard,
    title: "Кто",
  },
  {
    id: "why",
    image: YesCard,
    title: "Зачем",
  },
  {
    id: "where",
    image: YesCard,
    title: "Откуда",
  },

  {
    id: "пес",
    image: YesCard,
    title: "Пес",
  },
  {
    id: "кот",
    image: YesCard,
    title: "Кот",
  },
  {
    id: "Корова",
    image: YesCard,
    title: "Корова",
  },
];

const cardsDropdown = [
  {
    id: 0,
    image: YesCard,
    title: "Да",
  },
  {
    id: 1,
    image: YesCard,
    title: "Да",
  },
  {
    id: 2,
    image: YesCard,
    title: "Да",
  },
  {
    id: 3,
    image: YesCard,
    title: "Да",
  },
  {
    id: 4,
    image: YesCard,
    title: "Да",
  },
  {
    id: 5,
    image: YesCard,
    title: "Да",
  },
];

export const SelectedCardsContext = createContext();

export const Main = () => {
  const [searchText, setSearchText] = useState("");
  const [cardList, setCardList] = useState(cards);
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
    const filteredCards = cards.filter(
      (card) =>
        card.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1,
    );
    setCardList(filteredCards);
  }, [searchText]);

  return (
    <SelectedCardsContext.Provider value={[selectedCards, setSelectedCards]}>
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
          selectCard={selectCard}
          isHelpActive={isHelpActive}
          setIsHelpActive={setIsHelpActive}
        />
        <SearchBlock searchText={searchText} setSearchText={setSearchText} />
        <AllCards cards={cardList} isHelpActive={isHelpActive} />
        <Dropdown title='Простые фразы' cards={cardsDropdown} />
        <Dropdown title='Существительные' cards={cardsDropdown} />
        <Dropdown title='Глаголы' cards={cardsDropdown} />
        <Dropdown title='Прилагательные' cards={cardsDropdown} />
        <Footer />
      </div>
    </SelectedCardsContext.Provider>
  );
};
