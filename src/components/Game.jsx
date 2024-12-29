import { useEffect, useState } from "react";
import Card from "./Card";
import Image from "./Image";
import compareTwoCardsId from "../utils/compareTwoCards";
import formatLetteredId from "../utils/formatLetteredId";

const imageSize = "100px";

export default function Game({ imageSet, onChangeCurrentScore }) {
  const [flippedCard, setFlippedCard] = useState({ cards: [], flips: 0 });
  const [pairs, setPairs] = useState([]);
  const images = imageSet.images;
  const size = imageSet.size;
  const cardsLength = size * 2;

  const containerStyle = {
    gridTemplateColumns: `repeat(${size}, ${imageSize})`,
    gridTemplateRows: `repeat(${size},${imageSize})`,
  };

  useEffect(() => {
    if (flippedCard.cards.length === 2) {
      if (compareTwoCardsId(flippedCard.cards[0], flippedCard.cards[1])) {

        setPairs([...pairs, formatLetteredId(flippedCard.cards[0])]);
      }
    }
    if (flippedCard.cards.length === 3) {
      setFlippedCard({ ...flippedCard, cards: [flippedCard.cards[2]] });
    }
  }, [flippedCard]);

  const handleCardFlip = (id) => {
    setFlippedCard({
      cards: [...flippedCard.cards, id],
      flips: flippedCard.flips + 1,
    });
  };

  const checkIsPaired = (id) => {
    return pairs.includes(`${id}`);
  };

  const checkIsFlipped = (id) => {
    return flippedCard.cards.includes(id);
  };

  useEffect(() => {
    // changes the page when curren score gets updated, see main component index.jsx
    if (pairs.length === cardsLength) {
      onChangeCurrentScore(flippedCard.flips);
    }
  }, [pairs.length]);

  return (
    <section className="bg-slate-800 w-full h-full p-4 overflow-hidden">
      <div>
        <p>
          {pairs.length} / {cardsLength} | Flips: {flippedCard.flips}
        </p>
      </div>
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
