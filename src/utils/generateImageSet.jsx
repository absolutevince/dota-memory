import getImagesByDifficulty from "./getImagesByDifficulty";
import getRandomItems from "./getRandomItems";

export default function generateImageSet(images, difficulty) {
  const set = getImagesByDifficulty(images, difficulty);
  let cp = set.set.map((img) => {
    return { ...img, cardId: img.id + "a" };
  });
  cp = [
    ...cp,
    ...set.set.map((img) => {
      return { ...img, cardId: img.id + "b" };
    }),
  ];

  return { size: set.size, images: getRandomItems(cp, cp.length) };
  ;
}
