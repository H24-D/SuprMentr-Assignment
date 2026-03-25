import React, { useState } from "react";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");

  const getMessage = () => {
    switch (mood) {
      case "happy":
        document.body.style.background = "#d4edda";
        return "😊 You are feeling happy!";
      case "sad":
        document.body.style.background = "#d1ecf1";
        return "😢 Hope things get better!";
      case "angry":
        document.body.style.background = "#f8d7da";
        return "😡 Take a deep breath!";
      default:
        document.body.style.background = "#ffffff";
        return "Select your mood";
    }
  };

  return (
    <div className="container">
      <h1>Mood Tracker</h1>

      <div className="buttons">
        <button onClick={() => setMood("happy")}>Happy</button>
        <button onClick={() => setMood("sad")}>Sad</button>
        <button onClick={() => setMood("angry")}>Angry</button>
      </div>

      <h2>{getMessage()}</h2>
    </div>
  );
}

export default App;