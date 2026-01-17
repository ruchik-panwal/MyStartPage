import { terms } from "./terms";

function SearchTerms({getTerm}) {
  return (
    <div className="w-full h-full border overflow-scroll overflow-x-hidden">
      {terms.map(
        (term, ind) => term.name.includes(getTerm) && <div key={ind}>{term.name}</div>,
      )}
    </div>
  );
}

export default SearchTerms;
