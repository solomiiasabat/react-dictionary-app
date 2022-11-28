import React from "react";
import Synonyms from "./components/Synonyms";
import "./Meanings";

export default function Meanings(props) {
  return (
    <section>
      <div className="Meanings">
        <h5>{props.meanings.partOfSpeech}</h5>

        {props.meanings.definitions.map(function (definition, index) {
          if (index > 0) {
            return (
              <div key={index}>
                <ul>
                  <li className="definition">
                    {index}. {definition.definition}
                  </li>
                  <li className="example">
                    <small>{definition.example}</small>
                  </li>
                </ul>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          } else {
            return (
              <div key={index}>
                <ul>
                  <li className="definition">{definition.definition}</li>
                  <li className="example">
                    <small>{definition.example}</small>
                  </li>
                </ul>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
