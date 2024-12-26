import { useEffect, useState } from "react";
import Card from "./Card";
import Image from "./Image";
import compareTwoCardsId from "../utils/compareTwoCards";
import formatLetteredId from "../utils/formatLetteredId";

const imageSize = "100px";

export default function Game({ imageSet }) {
  const [flippedCard, setFlippedCard] = useState([]);
  const [pairs, setPairs] = useState([]);
  const images = imageSet.images;
  const size = imageSet.size;

  const containerStyle = {
    gridTemplateColumns: `repeat(${size}, ${imageSize})`,
    gridTemplateRows: `repeat(${size},${imageSize})`,
  };

  useEffect(() => {
    if (flippedCard.length === 2) {
      if (compareTwoCardsId(flippedCard[0], flippedCard[1])) {
        setPairs([...pairs, formatLetteredId(flippedCard[0])]);
      }
      console.log(flippedCard[0], flippedCard[1]);
    }
    if (flippedCard.length === 3) {
      setFlippedCard([flippedCard[2]]);
    }
  }, [flippedCard]);

  const handleCardFlip = (id) => {
    setFlippedCard([...flippedCard, id]);
  };

  const checkIsPaired = (id) => {
    return pairs.includes(`${id}`);
  };

  const checkIsFlipped = (id) => {
    return flippedCard.includes(id);
  };

  return (
    <section className="bg-slate-800 w-full h-full p-4 overflow-hidden">
      <h2>Game</h2>
      <div className=" grid gap-2 justify-center" style={containerStyle}>
        {images.length > 0 &&
          images.map((img, index) => (
            <Card
              key={index}
              onFlip={() => handleCardFlip(img.cardId)}
              isFlipped={checkIsFlipped(img.cardId)}
              isPaired={checkIsPaired(img.id)}
              id={img.id}
            >
              <Image src={img.imgUrl} width="100%" height="100%" />
            </Card>
          ))}
      </div>
    </section>
  );
}
