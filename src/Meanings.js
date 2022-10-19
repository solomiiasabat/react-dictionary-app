import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meanings.partOfSpeech}</h5>
      {props.meanings.definitions.map(function (definition, index) {
        return <p key={index}>{definition.definition}</p>;
      })}
    </div>
  );
}
