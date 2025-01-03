import dotaLogo from "../asset/dota-logo.png";

export default function Card({ children, id, onFlip, isFlipped, isPaired }) {
  const handleFlip = () => {
    if (isPaired) return;
    onFlip(id);
  };

  return (
    <div onClick={handleFlip} className="grid cursor-pointer">
      {isFlipped || isPaired ? (
        children
      ) : (
        <div
          style={{
            backgroundImage: "url(" + dotaLogo + ")",
          }}
          className="bg-gray-900 bg-center bg-cover bg-no-repeat border border-slate-500 rounded-md"
        ></div>
      )}
    </div>
  );
}
