import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meanings.partOfSpeech}</h5>
      {props.meanings.definitions.map(function (definition, index) {
        return (<div key={index}>{definition.example}<div>);
      })}
    </div>
  );
}
