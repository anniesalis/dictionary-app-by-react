import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div>
        <span className="definition">{props.meanings.definition}</span>
        <div className="example">{props.meanings.example}</div>

        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
    </div>
  );
}