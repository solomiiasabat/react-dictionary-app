import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Results(props) {
  if (props.results) {
    const phonetic =
      props.results.phonetics.filter((phonetic) => phonetic.audio != "")[0] ??
      null;
    console.log(props.results);
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h4 className="phonetic">
            {phonetic && (
              <>
                <a
                  href={phonetic.audio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faVolumeHigh} />
                </a>{" "}
                <strong>{phonetic.text}</strong>
              </>
            )}
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
