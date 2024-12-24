import { useState } from "react";
import dotaLogo from "../asset/dota-logo.png";

export default function Card({ children, cardId, onTurn }) {
  const [flipStatus, setFlipStatus] = useState(false);
  const handleTurn = () => {
    setFlipStatus(true);
    onTurn(cardId);
  };

  return (
    <div onClick={handleTurn} className="grid cursor-pointer">
      {!flipStatus ? (
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
