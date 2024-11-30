import { useEffect, useState } from "react";
import SearchResult, { Place } from "./SearchResult";
import SearchResults from "./SearchResults";
import { RxCross2 } from "react-icons/rx";

interface SearchProps {
  onChoosingPlace(place: Place): void;
}

function Search({ onChoosingPlace }: SearchProps) {
  var sampleResults = [
    { city: "city1", code: "code1", airport: "airport1" },
    { city: "city1", code: "code1", airport: "airport1" },
    { city: "city1", code: "code1", airport: "airport1" },
    { city: "city1", code: "code1", airport: "airport1" },
    { city: "city1", code: "code1", airport: "airport1" },
    { city: "city1", code: "code1", airport: "airport1" },
    { city: "city1", code: "code1", airport: "airport1" },
    { city: "city1", code: "code1", airport: "airport1" },
    { city: "city1", code: "code1", airport: "airport1" },
    { city: "city1", code: "code1", airport: "airport1" },
  ];

  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState(Array<Place>);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [debouncedSearchKeyWord, setDebouncedSearchKeyWord] = useState("");

  // const [results, setResults] = useState([]);
  const handleTextChange = (e: any) => {
    const keyword = e.target.value;
    // console.log(keyword);
    setIsSearching(true);
    setSearchKeyWord(e.target.value);

    // Perform API call
    setIsSearching(false);
  };

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedSearchKeyWord(searchKeyWord);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [searchKeyWord]);

  useEffect(() => {
    var rand = Math.floor(Math.random() * 10);
    var slicedArr = sampleResults.slice(0, rand);
    var res: any = {};
    var newData: any = [];
    slicedArr.forEach((res: any) => {
      newData.push(res);
    });

    console.log("newData", rand, newData);
    setResults(newData);
  }, [debouncedSearchKeyWord]);

  return (
    <div className="text-left p-md border-2 rounded-xl border-neutral-100 bg-white">
      <div className="flex border-2 rounded-xl border-neutral-100">
        <input
          className="outline-none p-md w-full"
          placeholder="Search"
          onChange={handleTextChange}
          value={searchKeyWord}
        ></input>
        <button
          className="w-[50px] hover:text-sky-700 "
          onClick={() => setSearchKeyWord("")}
        >
          <RxCross2 />
        </button>
      </div>
      <div>
        <SearchResults
          results={results}
          onChoosingPlace={onChoosingPlace}
        ></SearchResults>
      </div>
    </div>
  );
}

export default Search;
