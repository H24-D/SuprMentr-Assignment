import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Hobbies from "./pages/Hobbies";
import Subjects from "./pages/Subjects";
import Contact from "./pages/Contact"; // ✅ new
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <h1>Harsha D</h1>
        <p className="subtitle">Computer Science Student · Full Stack Developer</p>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/hobbies">Hobbies</Link>
          <Link to="/subjects">Subjects</Link>
          <Link to="/contact">Contact</Link> {/* ✅ updated */}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/contact" element={<Contact />} /> {/* ✅ updated */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;