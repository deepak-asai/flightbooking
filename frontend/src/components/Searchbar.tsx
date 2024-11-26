import { useState } from "react";

function SearchBar() {
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState([]);
  return (
    <div className="search-bar">
      <input placeholder="Search"></input>
      <div>{}</div>
    </div>
  );
}

export default SearchBar;
