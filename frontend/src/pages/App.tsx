import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to Gym App Pro — admin / trainer / member views to be implemented.</p>
      <ul>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  );
}

function Classes() {
  return (
    <div>
      <h2>Classes</h2>
      <p>Class listing will load from the API (stubbed).</p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif", padding: 24 }}>
      <header>
        <h1>Gym App Pro (Frontend)</h1>
        <nav>
          <a href="/">Home</a> | <a href="/login">Login</a>
        </nav>
        <hr />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </main>

      <footer style={{ marginTop: 40, color: "#666" }}>
        <small>Connects to API at: {import.meta.env.VITE_API_URL || "http://localhost:4000/api"}</small>
      </footer>
    </div>
  );
}
