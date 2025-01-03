import checkBestScore from "../utils/checkBestScore";
import Button from "./Button";

export default function GameOver({
  bestScore,
  currentScore,
  onChangeBestScore,
  onChangePage,
}) {
  const isBestScore = checkBestScore(bestScore, currentScore);

  if (isBestScore) {
    onChangeBestScore(currentScore);
  }

  return (
    <div>
      <div>
        {isBestScore ? (
          <p>
            Congratulations!! You got the Best Score with {currentScore} attempts
          </p>
        ) : (
          <p>You've made it in {currentScore} attempts</p>
        )}
      </div>
      <Button onClick={() => onChangePage("menu")}>Continue</Button>
    </div>
  );
}
