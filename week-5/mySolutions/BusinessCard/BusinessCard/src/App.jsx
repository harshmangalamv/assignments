import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div 
        style={{
          alignContent: "center", 
          border: "2px solid black",
          margin: 'auto',
          padding: "10 10 10 10",
          borderRadius: 10
        }}
      >
        <h1>Lokeshwar</h1>
        <p>A TA in the Best Faculty Org</p>
        <h2>Interests</h2>
        <p>
          Ionic <br />
          Open Minded <br />
          Arts
        </p>
      </div>
      <a href="https://www.linkedin.com/in/harshmangalamv">
        <button style={{ padding: 10, margin: 10 }}>LinkedIn</button>
      </a>
      <button style={{ padding: 10, margin: 10 }}>Twitter</button>
    </>
  );
}

export default App;
