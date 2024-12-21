import { useState, useEffect } from "react";
import Image from "../../Image";
import Menu from "../../Menu";
import Game from "../../Game";
import fetchImages from "../../../utils/fetchImages";

export default function Main() {
  const [isIngame, setIsIngame] = useState(false);
  const [highScore, setHigScore] = useState(0);
  const [score, setScore] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages((images) => {
      setImages(images);
    });
  }, []);

  const play = () => {
    setIsIngame(true);
  };

  return (
    <main className="flex h-[calc(100vh_-_70px)] justify-center p-8">
      {isIngame === false ? (
        <Menu currentScore={score} highScore={highScore} onPlay={play} />
      ) : (
        <Game />
      )}
    </main>
  );
}
