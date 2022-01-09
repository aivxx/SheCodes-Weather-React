import React from "react";
import Weather from "./weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by{" "}
        <a href="https://ashleyrebeccaxr.com/" target="_blank">
          {" "}
          Ashley Goldstein
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/aivxx/SheCodes-Weather-React"
          target="_blank"
        >
          open-sourced.
        </a>
      </footer>
    </div>
  );
}
