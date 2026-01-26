function SearchTerms({ getTerm, setSelectState, selectState, terms }) {
  function setSelectFunc(val) {
    setSelectState(val);
  }

  return (
    <div className="flex flex-col w-full h-full border overflow-hidden select-none gap-2 border-mainWhite rounded-[7px] p-2.5">
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
      className={`flex text-[1.3rem] text-mainWhite justify-between items-center p-[7px] rounded-[5px] ${isSelected ? "bg-[#1f1f1f]" : "bg-transparent"} `}
    >
      <div>
        <img src="" alt="" /> <div>{term.name}</div>
      </div>
      <div className="">{term.count}</div>
    </button>
  );
}

export default SearchTerms;
