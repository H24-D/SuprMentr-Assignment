import React from "react";
import { useLocation } from "react-router-dom";
import "./App.css";

function Dashboard() {
  const location = useLocation();
  const user = location.state;

  return (
    <div className="dashboard">
      <h2>🎉 Welcome!</h2>

      {user ? (
        <div className="user-card">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Joined:</strong> {user.date}</p>
        </div>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
}

export default Dashboard;