import { useState, useEffect } from "react";
import Image from "../../Image";
import Menu from "../../Menu";
import Game from "../../Game";
import fetchImages from "../../../utils/fetchImages";
import generateImageSet from "../../../utils/generateImageSet";
import GameOver from "../../GameOver";

export default function Main({ images }) {
  const [difficulty, setDifficulty] = useState("easy");
  const [bestScore, setBestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const imageSet = generateImageSet(images, difficulty);
  const [activePage, setActivePage] = useState("menu");

  const play = () => {
    setIsIngame(true);
  };

  const changeDifficulty = (value) => {
    setDifficulty(value);
  };

  const changeCurrentScore = (score) => {
    setCurrentScore(score);
  };

  const changeBestScore = (score) => {
    setBestScore(score);
  };

  const changePage = (pageName) => {
    setActivePage(pageName);
  };

  useEffect(() => {
    setActivePage("gameover");
  }, [currentScore]);

  return (
    <main className="flex h-[calc(100vh_-_70px)] justify-center p-8">
      {activePage === "menu" && (
        <Menu
          currentScore={score}
          bestScore={bestScore}
          onPlay={play}
          onChangeDifficulty={changeDifficulty}
          onChangePage={changePage}
        />
      )}
      {activePage === "game" && (
        <Game
          imageSet={imageSet}
          bestScore={bestScore}
          onChangeCurrentScore={changeCurrentScore}
          onChangePage={changePage}
        />
      )}
      {activePage === "gameOver" && (
        <GameOver
          bestScore={bestScore}
          currentScore={currentScore}
          onChangeBestScore={changeBestScore}
          onChangePage={changePage}
        />
      )}
    </main>
  );
}
