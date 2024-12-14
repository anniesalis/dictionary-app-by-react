import React from "react";
import Phonetic from "./Phonetic";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <div>
            <Phonetic phonetic={props.results.phonetic} />
          </div>

          {props.results.meanings.map(function (meanings, index) {
            return (
              <section key={index}>
                <Meanings meanings={meanings} />
              </section>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}