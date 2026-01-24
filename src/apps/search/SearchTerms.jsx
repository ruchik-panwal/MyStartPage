function SearchTerms({ getTerm, setSelectState, selectState, terms }) {
  function setSelectFunc(val) {
    setSelectState(val);
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
  }

  return (
    <button
      onMouseEnter={onSelect}
      onClick={handleClick}
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
