function SearchBar({ termSetter }) {
  // Setting the value for the above state
  function inputChange(value) {
    termSetter(value);
  }

  return (
    // Taking the string of input from the Search Bar
    <input
      type="text"
      className="w-full h-[6vh] border outline-none p-1 pl-3 pr-3"
      onChange={(event) => inputChange(event.target.value)}
    />
  );
}

export default SearchBar;
