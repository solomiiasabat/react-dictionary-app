import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./SearchEngine.css";
import Photos from "./Photos";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState("");

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const apiPexelsKey =
      "563492ad6f917000010000017ddba45ac07c4923ade329071eb1bc2f";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;

    let headers = { Authorization: `Bearer ${apiPexelsKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
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
      <Photos photos={photos} />
    </div>
  );
}
