import { BackgroundLayer } from "../../shared/BackgroundLayer/BackgroundLayer";
import { CardsBlock } from "../../components/CardsBlock/CardsBlock";
import styles from "./Main.module.scss";
import { LoginButton } from "../../components/LoginButton/LoginButton";
import { SearchBlock } from "../../components/SearchBlock/SearchBlock";
import { Footer } from "../../components/Footer/Footer";
import { AllCards } from "../../components/AllCards/AllCards";
import { Dropdown } from "../../components/Dropdown/Dropdown";
import { createContext, useCallback, useEffect, useRef, useState } from "react";
import {
  YesCard,
  NoCard,
  BadCard,
  ByeCard,
  FoodCard,
  FootCard,
  GoodCard,
  HandCard,
  HiCard,
  MeCard,
  ToothCard,
  WaterCard,
  YouCard,
  AppleCard,
  BrushCard,
  DressCard,
  DrinkCard,
  EatCard,
  GiveCard,
  GoCard,
  HelpCard,
  HurtCard,
  PlayCard,
  RideCard,
  SayCard,
  SleepCard,
  ThinkCard,
  WaitCard,
  WalkCard,
  WantCard,
} from "../../hooks";

const allCards = [
  {
    id: "yes",
    image: YesCard,
    title: "Да",
  },
  {
    id: "no",
    image: NoCard,
    title: "Нет",
  },
  {
    id: "can",
    image: YesCard,
    title: "Можно",
  },
  {
    id: "cant",
    image: NoCard,
    title: "Нельзя",
  },
  {
    id: "good",
    image: GoodCard,
    title: "Хорошо",
  },
  {
    id: "bad",
    image: BadCard,
    title: "Плохо",
  },
  {
    id: "bye",
    image: ByeCard,
    title: "Пока",
  },
  {
    id: "hi",
    image: HiCard,
    title: "Привет",
  },
  {
    id: "me",
    image: MeCard,
    title: "Я",
  },
  {
    id: "you",
    image: YouCard,
    title: "Ты",
  },
  {
    id: "apple",
    image: AppleCard,
    title: "Яблоко",
  },
  {
    id: "water",
    image: WaterCard,
    title: "Вода",
  },
  {
    id: "food",
    image: FoodCard,
    title: "Еда",
  },
  {
    id: "foot",
    image: FootCard,
    title: "Нога",
  },
  {
    id: "hand",
    image: HandCard,
    title: "Рука",
  },
  {
    id: "tooth",
    image: ToothCard,
    title: "Зуб",
  },
  {
    id: "wait",
    image: WaitCard,
    title: "Ждать",
  },
  {
    id: "eat",
    image: EatCard,
    title: "Есть",
  },
  {
    id: "help",
    image: HelpCard,
    title: "Помоги",
  },
  {
    id: "ride",
    image: RideCard,
    title: "Катать",
  },
  {
    id: "drink",
    image: DrinkCard,
    title: "Пить",
  },
  {
    id: "play",
    image: PlayCard,
    title: "Играть",
  },
  {
    id: "want",
    image: WantCard,
    title: "Хочу",
  },
  {
    id: "brush",
    image: BrushCard,
    title: "Чистить зубы",
  },
  {
    id: "hurt",
    image: HurtCard,
    title: "Болит",
  },
  {
    id: "dress",
    image: DressCard,
    title: "Одеваться",
  },
  {
    id: "think",
    image: ThinkCard,
    title: "Думать",
  },
  {
    id: "sleep",
    image: SleepCard,
    title: "Спать",
  },
  {
    id: "go",
    image: GoCard,
    title: "Идти",
  },
  {
    id: "say",
    image: SayCard,
    title: "Скажи",
  },
  {
    id: "walk",
    image: WalkCard,
    title: "Гулять",
  },
  {
    id: "give",
    image: GiveCard,
    title: "Дай",
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

const easyPhrases = [
  {
    id: "yes",
    image: YesCard,
    title: "Да",
  },
  {
    id: "no",
    image: NoCard,
    title: "Нет",
  },
  {
    id: "can",
    image: YesCard,
    title: "Можно",
  },
  {
    id: "cant",
    image: NoCard,
    title: "Нельзя",
  },
  {
    id: "good",
    image: GoodCard,
    title: "Хорошо",
  },
  {
    id: "bad",
    image: BadCard,
    title: "Плохо",
  },
  {
    id: "bye",
    image: ByeCard,
    title: "Пока",
  },
  {
    id: "hi",
    image: HiCard,
    title: "Привет",
  },
];

const nouns = [
  {
    id: "me",
    image: MeCard,
    title: "Я",
  },
  {
    id: "you",
    image: YouCard,
    title: "Ты",
  },
  {
    id: "apple",
    image: AppleCard,
    title: "Яблоко",
  },
  {
    id: "water",
    image: WaterCard,
    title: "Вода",
  },
  {
    id: "food",
    image: FoodCard,
    title: "Еда",
  },
  {
    id: "foot",
    image: FootCard,
    title: "Нога",
  },
  {
    id: "hand",
    image: HandCard,
    title: "Рука",
  },
  {
    id: "tooth",
    image: ToothCard,
    title: "Зуб",
  },
];

const verbs = [
  {
    id: "wait",
    image: WaitCard,
    title: "Ждать",
  },
  {
    id: "eat",
    image: EatCard,
    title: "Есть",
  },
  {
    id: "help",
    image: HelpCard,
    title: "Помоги",
  },
  {
    id: "ride",
    image: RideCard,
    title: "Катать",
  },
  {
    id: "drink",
    image: DrinkCard,
    title: "Пить",
  },
  {
    id: "play",
    image: PlayCard,
    title: "Играть",
  },
  {
    id: "want",
    image: WantCard,
    title: "Хочу",
  },
  {
    id: "brush",
    image: BrushCard,
    title: "Чистить зубы",
  },
  {
    id: "hurt",
    image: HurtCard,
    title: "Болит",
  },
  {
    id: "dress",
    image: DressCard,
    title: "Одеваться",
  },
  {
    id: "think",
    image: ThinkCard,
    title: "Думать",
  },
  {
    id: "sleep",
    image: SleepCard,
    title: "Спать",
  },
  {
    id: "go",
    image: GoCard,
    title: "Идти",
  },
  {
    id: "say",
    image: SayCard,
    title: "Скажи",
  },
  {
    id: "walk",
    image: WalkCard,
    title: "Гулять",
  },
  {
    id: "give",
    image: GiveCard,
    title: "Дай",
  },
];

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
        <Dropdown title='Прилагательные' cards={cardsDropdown} />
        <Footer />
      </div>
    </SelectedCardsContext.Provider>
  );
};
