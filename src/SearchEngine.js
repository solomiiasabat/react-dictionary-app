import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0]);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form className="pt-3" onSubmit={search}>
        <input
          type="search"
          placeholder=" Search here"
          autoFocus
          onChange={handleChange}
        ></input>
      </form>
      <Results results={results} />
    </div>
  );
}
