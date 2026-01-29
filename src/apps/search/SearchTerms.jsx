function SearchTerms({ getTerm, setSelectState, selectState, terms }) {
  function setSelectFunc(val) {
    setSelectState(val);
  }

  return (
    <div className="flex flex-col w-full h-full border overflow-hidden select-none gap-2 bg-containerBg rounded-[7px] p-2">
      {terms
        .filter((term) =>
          term.name.toLowerCase().includes(getTerm.toLowerCase()),
        )
        .map((term, ind) => (
          <TermButton
            key={term.name}
            term={term}
            isSelected={ind == selectState}
            onSelect={() => setSelectFunc(ind)}
          />
        ))}
    </div>
  );
}

function TermButton({ term, ind, onSelect, isSelected }) {
  function handleClick() {
    window.open(term.link);
    term.count = term.count + 1;
  }

  return (
    <button
      onMouseEnter={onSelect}
      onClick={handleClick}
      className={`flex text-[1.3rem]  justify-between items-center p-1.75 rounded-[5px] ${isSelected ? "bg-mainWhite  text-black" : "bg-transparent text-mainWhite"} `}
    >
      <div>
        <img /> <div>{term.name}</div>
      </div>
      <div className="">{term.count}</div>
    </button>
  );
}

export default SearchTerms;
