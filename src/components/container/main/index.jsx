import { useState, useEffect } from "react";
import Menu from "../../Menu";
import Game from "../../Game";
import generateImageSet from "../../../utils/generateImageSet";
import GameOver from "../../GameOver";

export default function Main({ images }) {
  const [difficulty, setDifficulty] = useState("easy");
  const [bestScore, setBestScore] = useState({
    easy: 0, normal: 0, hard: 0
  });
  const [currentScore, setCurrentScore] = useState({
    easy: 0, normal: 0, hard: 0,
  });
  const imageSet = generateImageSet(images, difficulty);
  const [activePage, setActivePage] = useState("menu");

  const play = () => {
    setIsIngame(true);
  };

  const changeDifficulty = (value) => {
    setDifficulty(value);
  };

  const changeCurrentScore = (score) => {
    setCurrentScore({ ...currentScore, [difficulty]: score });
    changePage('gameOver')
  };

  const changeBestScore = (score) => {
    setBestScore({ ...bestScore, [difficulty]: score });
  };

  const changePage = (pageName) => {
    setActivePage(pageName);
  };


  return (
    <main className="flex h-[calc(100vh_-_70px)] justify-center p-8">
      {activePage === "menu" && (
        <Menu
          currentScore={currentScore[difficulty]}
          bestScore={bestScore[difficulty]}
          onPlay={play}
          onChangeDifficulty={changeDifficulty}
          onChangePage={changePage}
        />
      )}
      {activePage === "game" && (
        <Game
          imageSet={imageSet}
          bestScore={bestScore[difficulty]}
          onChangeCurrentScore={changeCurrentScore}
          onChangePage={changePage}
        />
      )}
      {activePage === "gameOver" && (
        <GameOver
          bestScore={bestScore[difficulty]}
          currentScore={currentScore[difficulty]}
          onChangeBestScore={changeBestScore}
          onChangePage={changePage}
        />
      )}
    </main>
  );
}
