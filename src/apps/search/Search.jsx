import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchTerms from "./SearchTerms";

function Search() {
  const [myTerm, setMyTerm] = useState(""); //"Term" is what the user types in the input

  // Setter Function for Input
  function setTerm(val) {
    setMyTerm(val);
  }

  return (
    <div className="bg-lavender-mist h-full w-full p-5 gap-3 flex flex-col">
      {/* Taking Input from the user*/}
      <SearchBar termSetter={(val) => setTerm(val)} />
      {/* Giving the input for filtering*/}
      <SearchTerms getTerm={myTerm} />
    </div>
  );
}

export default Search;
