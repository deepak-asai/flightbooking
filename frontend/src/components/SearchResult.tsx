import { useState } from "react";

interface SearchResultProps {
  code: string;
  airport: string;
  city: string;
}

function SearchResult({ code, airport, city }: SearchResultProps) {
  return (
    <div className="search-result flex-container">
      <div>{code}</div>
      <div>
        <div>{airport}</div>
        <div>{city}</div>
      </div>
    </div>
  );
}

export default SearchResult;
