import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cacheUpdate } from "../store/searchSlice";

const Search = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const cache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const getSuggestion = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchTxt
    );
    const json = await data.json();
    setSearchResult(json[1]);
    dispatch(
      cacheUpdate({
        [searchTxt]: json[1],
      })
    );
  };

  //debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchTxt]) {
        setSearchResult(cache[searchTxt]);
      } else {
        getSuggestion();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTxt]);

  const handleChange = (evt) => {
    setSearchTxt(evt.target.value);
  };

  const handleSrchClick = (srch) => {
    setSearchTxt(srch);
  };

  return (
    <>
      <input
        value={searchTxt}
        type="text"
        className="w-3/5 p-2 border border-gray-400 rounded-l-full"
        onChange={handleChange}
        onFocus={() => setShowSuggestion(true)}
        onBlur={() => setShowSuggestion(false)}
      />
      <button className="p-2 border border-gray-400 rounded-r-full bg-gray-100 hover:bg-gray-200">
        🔍
      </button>

      {showSuggestion && (
        <div className="absolute top-15 left-[32%] rounded p-2 w-2/5 flex flex-col bg-gray-100 shadow-md">
          {searchResult.map((srch, idx) => (
            <div className="cursor-pointer hover:bg-gray-200" key={idx}>
              <p onMouseDown={() => handleSrchClick(srch)}> 🔍 {srch}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
