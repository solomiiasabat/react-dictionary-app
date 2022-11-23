import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Word(props) {
  if (props.results) {
    const phoneticsWithAudio = props.results.phonetics.filter(
      (phonetic) => phonetic.audio !== ""
    );
    const phonetic = phoneticsWithAudio[0] ?? null;

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
      </div>
    );
  } else {
    return null;
  }
}
