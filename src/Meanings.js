import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meanings.partOfSpeech}</h5>
      {props.meanings.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <li>{definition.definition}</li>
            <i>
              <small>{definition.example}</small>
            </i>
          </div>
        );
      })}
    </div>
  );
}
