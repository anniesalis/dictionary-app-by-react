import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="CodingPro logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Sunrise"/>
        </main>
        <footer className="App-footer">
          <small>
            This project is coded by{" "}
            <a
              href="https://anniesalisportfolio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Annie Salis
            </a>
            , is open-sourced on{" "}
            <a
              href="https://github.com/anniesalis"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://dictionary-app-by-react.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;



