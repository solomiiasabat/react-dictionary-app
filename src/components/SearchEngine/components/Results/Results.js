import React from "react";
import Meanings from "./components/Meanings/Meanings";
import "./Results.css";

export default function Results(props) {
  return (
    props.results && (
      <div className="Results">
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    )
  );
}
