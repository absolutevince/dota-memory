import Image from "./Image";

const imageSize = "100px";

export default function Game({ imageSet }) {
  const images = imageSet.images;
  const size = imageSet.size;

  const containerStyle = {
    gridTemplateColumns: `repeat(${size}, ${imageSize})`,
    gridTemplateRows: `repeat(${size},${imageSize})`,
  };

  return (
    <section className="bg-slate-800 w-full h-full p-4">
      <h2>Game</h2>
      <div className=" grid gap-2 justify-center" style={containerStyle}>
        {images.length > 0 &&
          images.map((img, index) => (
            <Image key={index} src={img} width="100%" height="100%" />
          ))}
      </div>
    </section>
  );
}
