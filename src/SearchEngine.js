import React, { useState } from "react";

export default function SearchEngine() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching ${keyword}`);
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
    </div>
  );
}
