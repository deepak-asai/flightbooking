import { useState } from "react";
import SearchResult, { Place } from "./SearchResult";

interface SearchResultsProps {
  results: Array<Place>;
  onChoosingPlace(place: Place): any;
}

function SearchResults({ results, onChoosingPlace }: SearchResultsProps) {
  return (
    // h-[250px] w-[500px]
    <div className="overflow-y-scroll">
      {results.map((result) => (
        <div className="my-lg" onClick={() => onChoosingPlace(result)}>
          <SearchResult
            city={result.city}
            airport={result.airport}
            code={result.code}
          ></SearchResult>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
