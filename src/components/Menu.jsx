import { useEffect, useState } from "react";
import Button from "./Button";

export default function Menu({
  difficulty,
  highScore,
  currentScore,
  onPlay,
  onChangeDifficulty,
}) {
  useEffect(() => {
    const button = document.querySelector(`button[data-value="${difficulty}"]`);
  }, [difficulty]);
  return (
    <article
      id="menu"
      className="w-[500px] h-[300px] flex flex-col justify-between bg-red-800 rounded-md p-4 opacity-1"
    >
      <h2 className="text-xl text-red-400">Menu</h2>
      <div className="flex flex-col gap-4">
        <p className="txt-large">
          High Score: <span className="txt-light">{highScore}</span>
        </p>
        <p className="txt-large">
          Your Score: <span className="txt-light">{currentScore}</span>
        </p>
      </div>

      <div className="diff_buttons">
        <Button value="easy" onClick={() => onChangeDifficulty("easy")}>
          Easy
        </Button>
        <Button value="normal" onClick={() => onChangeDifficulty("normal")}>
          Normal
        </Button>
        <Button value="hard" onClick={() => onChangeDifficulty("hard")}>
          Hard
        </Button>
      </div>
      <div className="grid">
        <Button onClick={onPlay}>Play</Button>
      </div>
    </article>
  );
}
