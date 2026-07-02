import React, { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password");
  const [message, setMessage] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });
      const token = res.data?.token;
      if (token) {
        localStorage.setItem("token", token);
        setMessage("Login successful (token stored).");
      } else {
        setMessage("Login returned no token (stub).");
      }
    } catch (err: any) {
      setMessage(err?.response?.data?.error || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", padding: 16 }}>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%" }} />
        <label style={{ marginTop: 8 }}>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%" }} />
        <button style={{ marginTop: 12 }} type="submit">Sign in</button>
      </form>
      {message && <p style={{ marginTop: 12 }}>{message}</p>}
    </div>
  );
}
