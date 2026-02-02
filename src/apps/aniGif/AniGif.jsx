import { useState, useEffect } from "react";
import { pinData } from "./pinData";

function AniGif() {
  const [number, setNumber] = useState(() => {
    const saved = localStorage.getItem("pinIndex");
    const initialValue = JSON.parse(saved);
    return initialValue !== null ? initialValue : 0;
  });

  useEffect(() => {
    localStorage.setItem("pinIndex", JSON.stringify(number));
  }, [number]);

  function numSetter() {
    if (number >= pinData.urls.length - 1) {
      setNumber(0);
    } else {
      setNumber(number + 1);
    }
  }

  return (
    <div className="relative flex flex-col bg-containerBg rounded-[10px] overflow-hidden">
      <img
        src={pinData.urls[number]}
        alt={`Pin ${number}`}
        className="h-full w-full object-cover max-h-100"
      />
      <button
        onClick={numSetter}
        className="absolute bottom-2 left-2 bg-white p-2 rounded shadow"
      >
        change
      </button>
    </div>
  );
}

export default AniGif;
