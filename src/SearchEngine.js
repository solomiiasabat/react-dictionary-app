import React, { useState } from "react";
import axios, { AxiosError, HttpStatusCode } from "axios";
import Results from "./Results";
import "./SearchEngine.css";

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
      <section>
        <form className="pt-3" onSubmit={search}>
          <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
          ></input>
          <div className="hint-examples">i.e. moon, eat, yoga...</div>
        </form>
      </section>
      <Results results={results} keyword={keyword} />
    </div>
  );
}
