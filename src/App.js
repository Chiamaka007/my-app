import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was built by Chiamaka Ugoji and is
          <a href="https://github.com/Chiamaka007/my-app" className="footer"> open-sourced</a>
        </footer>
      </div>
    </div>
  );
}
