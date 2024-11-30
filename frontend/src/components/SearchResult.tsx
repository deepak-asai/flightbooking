export interface Place {
  code: string;
  airport: string;
  city: string;
}

function SearchResult({ code, airport, city }: Place) {
  return (
    <div className="search-result flex items-start">
      <span className="bg-neutral-100 text-sm rounded-xl px-sm py-xs">
        {code}
      </span>
      <div className="ml-sm text-left">
        <div className="text-sm">{airport}</div>
        <div className="text-xs">{city}</div>
      </div>
    </div>
  );
}

export default SearchResult;
