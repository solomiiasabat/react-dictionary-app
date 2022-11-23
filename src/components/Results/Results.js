import React from "react";
import Meanings from "../Meanings/Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
