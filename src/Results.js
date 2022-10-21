import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Results(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h4 className="phonetic">
            <a href={props.results.phonetics[0].audio}>
              <FontAwesomeIcon icon={faVolumeHigh} />
            </a>{" "}
            <bold>{props.results.phonetics[0].text}</bold>
          </h4>
        </section>

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
