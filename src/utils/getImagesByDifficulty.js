import getRandomItems from "./getRandomItems";

export default function getImagesByDiffuculty(images, difficulty) {
  let count = 4;
  if (difficulty === "normal") {
    count = 6;
  } else if (difficulty === "hard") {
    count = 8;
  }
  const arr = getRandomItems(images, count * 2);

  return { set: arr, size: count };
}
