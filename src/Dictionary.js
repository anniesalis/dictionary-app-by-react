import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let [loading, setLoading] = useState(false); // New state for spinner

  function handleResponse(response) {
    setResults(response.data);
    setLoading(false); // Stop spinner when data is received
  }

  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
    setLoading(false); // Stop spinner when data is received
  }

  function search() {
    setLoading(true); // Start spinner
    // Dictionary API
    let apiKey = `fdo0da8da8fd60t560b33ec66f43f0c4`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse).catch(() => setLoading(false));

    // Images API
    let imagesApiKey = `fdo0da8da8fd60t560b33ec66f43f0c4`;
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse).catch(() => setLoading(false));
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Enter a word</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
            <button type="submit">Search</button> {/* New button added */}
          </form>
        </section>
        {loading && (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        )}
        {!loading && results && <Results results={results} />}
        {!loading && photos && <Photos photos={photos} />}
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
