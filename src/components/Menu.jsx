import { useEffect } from "react";
import Button from "./Button";

export default function Menu({ highScore, currentScore, onPlay }) {
  const handleOnPlay = () => {
    const menu = document.querySelector("#menu");
    menu.style.opacity = 0;
    menu.style.transition = "opacity 300ms ease-out";
    // add a delay before displaying the Game component to give time for the transition effect
  };

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
      <div className="grid">
        <Button onClick={onPlay}>Play</Button>
      </div>
    </article>
  );
}
