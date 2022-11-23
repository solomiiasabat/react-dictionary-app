import React, { useState } from "react";
import axios from "axios";
import Results from "../Results/Results";
import Word from "../Word";
import "./SearchEngine.css";
import Photos from "../Photos/Photos";
import Constants from "../Constants";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState("");
  const [error, setError] = useState(false);

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch(() => setError(true));

    const apiPexelsKey =
      "563492ad6f917000010000017ddba45ac07c4923ade329071eb1bc2f";
    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=4`;

    let headers = { Authorization: `Bearer ${apiPexelsKey}` };
    axios
      .get(pexelsApiUrl, { headers: headers })
      .then(handlePexelsResponse)
      .catch(() => setError(true));
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
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
      {!error && <Word results={results} keyword={keyword} />}
      {!error && <Photos photos={photos} />}
      {error ? (
        <section>
          <div className="error">
            Word {keyword} not found.
            <p>
              Please, <span className="please-reload">reload this page</span>
            </p>
          </div>
        </section>
      ) : (
        <Results results={results} />
      )}
    </div>
  );
}
