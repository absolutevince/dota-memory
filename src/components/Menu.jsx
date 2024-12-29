import Button from "./Button";

export default function Menu({
  bestScore,
  currentScore,
  onChangeDifficulty,
  onChangePage,
  difficulty,
}) {
  return (
    <article
      id="menu"
      className="w-[500px] h-[300px] flex flex-col justify-between bg-red-800 rounded-md p-4 opacity-1"
    >
      <h2 className="text-xl text-red-400">Menu</h2>
      <div className="flex flex-col gap-4">
        <p className="txt-large">
          Best Score: <span className="txt-light">{bestScore}</span>
        </p>
        <p className="txt-large">
          Your Score: <span className="txt-light">{currentScore}</span>
        </p>
      </div>

      <div className="diff_buttons">
        <Button value="easy" className={difficulty === "easy" ? "bg-red-400 text-slate-800" : ""} onClick={() => onChangeDifficulty("easy")}>
          Easy
        </Button>
        <Button value="normal" className={difficulty === "normal" ? "bg-red-400 text-slate-800 " : ""} onClick={() => onChangeDifficulty("normal")}>
          Normal
        </Button>
        <Button value="hard" className={difficulty === "hard" ? "bg-red-400 text-slate-800" : ""} onClick={() => onChangeDifficulty("hard")}>
          Hard
        </Button>
      </div>
      <div className="grid">
        <Button onClick={() => onChangePage("game")}>Play</Button>
      </div>
    </article>
  );
}
