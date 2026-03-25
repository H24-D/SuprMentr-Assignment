import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.includes("@")) {
      setMessage("❌ Invalid email");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ Password must be at least 6 characters");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setMessage("❌ Add uppercase letter");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setMessage("❌ Add a number");
      return;
    }

    // ✅ Redirect with data
    navigate("/dashboard", {
      state: {
        email: email,
        date: new Date().toLocaleDateString()
      }
    });
  };

  return (
    <div className="signup-container">
      <h2>Signup Form</h2>

      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={validateForm}>Signup</button>

      <p>{message}</p>
    </div>
  );
}

export default Signup;