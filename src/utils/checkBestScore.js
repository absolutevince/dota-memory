export default function checkBestScore(bestScore, currentScore) {
  if (bestScore === 0) {
    return true;
  } else if (currentScore < bestScore) {
    return true;
  } else {
    return false;
  }
}
