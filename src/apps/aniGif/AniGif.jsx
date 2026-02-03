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
    <div className="relative flex flex-col rounded-[10px] overflow-hidden items-center">
      <img
        src={pinData.urls[number]}
        alt={`Pin ${number}`}
        className="h-full w-full object-cover max-h-100"
      />
      <div className="absolute bg-white h-full w-full mix-blend-difference"></div>
      <button
        onClick={numSetter}
        className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 mix-blend-difference hover:cursor-pointer"
      ><p className="">Sike</p>
      </button>
    </div>
  );
}

export default AniGif;
