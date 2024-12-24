import { useState, useEffect } from "react";
import Image from "../../Image";
import Menu from "../../Menu";
import Game from "../../Game";
import fetchImages from "../../../utils/fetchImages";
import generateImageSet from "../../../utils/generateImageSet";

export default function Main({ images }) {
  const [isIngame, setIsIngame] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [highScore, setHigScore] = useState(0);
  const [score, setScore] = useState(0);
  const imageSet = generateImageSet(images, difficulty);

  const play = () => {
    setIsIngame(true);
  };

  const changeDifficulty = (value) => {
    setDifficulty(value);
  };
  return (
    <main className="flex h-[calc(100vh_-_70px)] justify-center p-8">
      {isIngame === false ? (
        <Menu
          currentScore={score}
          highScore={highScore}
          onPlay={play}
          onChangeDifficulty={changeDifficulty}
        />
      ) : (
        <Game imageSet={imageSet} />
      )}
    </main>
  );
}
