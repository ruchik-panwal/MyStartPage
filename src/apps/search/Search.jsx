import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchTerms from "./SearchTerms";
import { terms } from "./terms";

function Search() {
  const [myTerm, setMyTerm] = useState(""); //"Term" is what the user types in the input
  const [select, setSelect] = useState(0);

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      const filtered = terms.filter((t) =>
        t.name.toLowerCase().includes(myTerm.toLowerCase()),
      );

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelect((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelect((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
      } else if (event.key === "Enter") {
        const selectedTerm = filtered[select];
        if (selectedTerm) {
          window.open(selectedTerm.link, "_blank");
          filtered.count = filtered.count + 1;
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [myTerm, select]);

  function setTerm(val) {
    setMyTerm(val);
    setSelect(0);
  }

  return (
    <div className= "h-full w-full gap-3 flex flex-col rounded-lg">
      {/* Taking Input from the user*/}
      <SearchBar termSetter={(val) => setTerm(val)} />
      {/* Giving the input for filtering*/}
      <SearchTerms
        getTerm={myTerm}
        setSelectState={(val) => setSelect(val)}
        selectState={select}
        terms={terms}
      />
    </div>
  );
}

export default Search;
