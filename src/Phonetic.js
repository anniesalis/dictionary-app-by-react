import React from "react";
import "./Phonetic.css"

export default function Phonetic(props) {
  if (props) {
    return (
      <div className="Phonetic">
        <p>{props.phonetic}</p>
        <p className="text">{props.phonetic.text}</p>
      </div>
    );
  } else {
    return null;
  }
}