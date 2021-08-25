import React from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import Modals from "./components/Modals";
import BasicosRouter from "./components/BasicosRouter";
import CrudApi from "./components/CrudApi";
import SongSearch from "./components/SongSearch";

function App() {
  return (
    <div className="App">
      {/* <ContactForm /> */}
      {/* <Modals /> */}
      <div>
        <h1>React Router</h1>
        <a
          href="https://reactrouter.com/web/guides/quick-start"
          target="_blank"
          rel="noreferrer"
        >
          Documentation
        </a>
        <hr></hr>
        <SongSearch />
        <hr></hr>
        <CrudApi />
      </div>
      <BasicosRouter />
    </div>
  );
}

export default App;
