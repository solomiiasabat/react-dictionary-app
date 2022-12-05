import React, { useState } from "react";
import Results from "./components/Results/Results";
import Word from "./components/Word";
import "./SearchEngine.css";
import Photos from "./components/Photos/Photos";
import { searchWord, searchPictures } from "./utils";

export default function SearchEngine() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState("");
  const [error, setError] = useState(false);

  function search(event) {
    event.preventDefault();
    searchWord(keyword, setResults, setError);
    searchPictures(keyword, setPhotos, setError);
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
