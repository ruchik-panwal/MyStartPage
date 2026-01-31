import { useState, useEffect, useMemo } from "react";
import SearchBar from "./SearchBar";
import SearchTerms from "./SearchTerms";
import { terms } from "./terms";

function Search() {
  const [myTerm, setMyTerm] = useState("");
  const [select, setSelect] = useState(0);

  // 1. Memoize filtered list so it only updates when myTerm or terms change
  const filtered = useMemo(() => {
    const list = terms.filter((t) =>
      t.name.toLowerCase().includes(myTerm.toLowerCase()),
    );

    return list.length > 0
      ? list
      : [
          {
            name: "Search Google",
            link: "https://www.google.com/search?q=",
            logo: "public/Logos/googleSearchLogo.webp",
          },
        ];
  }, [myTerm]);

  useEffect(() => {
    const handleGlobalKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setSelect((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        setSelect((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
      } else if (event.key === "Enter") {
        const selectedTerm = filtered[select];
        if (selectedTerm) {
          if (selectedTerm.name === "Search Google") {
            // FIXED: Changed getTerm to myTerm
            window.open(
              `https://www.google.com/search?q=${encodeURIComponent(myTerm)}`,
              "_blank",
            );
          } else {
            window.open(selectedTerm.link, "_blank");
          }
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
    // select is added here to ensure the Enter key knows which index is active
  }, [myTerm, select, filtered]);

  function handleSetTerm(val) {
    setMyTerm(val);
    setSelect(0); // Reset selection when user types
  }

  return (
    <div className="h-full w-full gap-3 flex flex-col rounded-lg font-extralight">
      <SearchBar termSetter={handleSetTerm} />
      <SearchTerms
        getTerm={myTerm}
        setSelectState={setSelect}
        selectState={select}
        // Pass the already filtered list to the child component
        terms={filtered}
      />
    </div>
  );
}

export default Search;
