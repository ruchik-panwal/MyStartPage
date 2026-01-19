import { useState } from "react";
import { terms } from "./terms";

function SearchTerms({ getTerm }) {
  const [select, setSelect] = useState(0);

  function setSelectFunc(val) {
    setSelect(val);
  }

  return (
    <div className="flex flex-col w-full h-full border overflow-y-scroll overflow-x-hidden select-none">
      {terms
        .filter((term) =>
          term.name.toLowerCase().includes(getTerm.toLowerCase()),
        )
        .map((term, ind) => (
          <TermButton
            key={ind}
            term={term}
            isSelected={ind == select}
            onSelect={() => setSelectFunc(ind)}
          />
        ))}
    </div>
  );
}

function TermButton({ term, ind, onSelect, isSelected }) {
  return (
    <button
      onMouseEnter={onSelect}
      className={`flex justify-between items-center ${isSelected ? "bg-black" : "bg-white"}`}
    >
      <div>
        <img src="" alt="" /> <div>{term.name}</div>
      </div>
      <div className="">{term.count}</div>
    </button>
  );
}

export default SearchTerms;
