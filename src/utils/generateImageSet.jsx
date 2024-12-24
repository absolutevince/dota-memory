import getImagesByDifficulty from "./getImagesByDifficulty";
import getRandomItems from "./getRandomItems";

export default function generateImageSet(images, difficulty) {
  const set = getImagesByDifficulty(images, difficulty);
  const cp = [...set.set, ...set.set];
  const randomizedArray = getRandomItems(cp, cp.length);

  return { size: set.size, images: randomizedArray };
}
