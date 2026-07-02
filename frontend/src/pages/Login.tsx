import React, { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Login() {
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await api.post("/auth/login", { email, password });
      const token = res.data?.token;
      if (token) {
        localStorage.setItem("token", token);
        setMessage("Login successful — token stored.");
      } else {
        setMessage("Login succeeded (no token returned in stub).");
      }
    } catch (err: any) {
      setMessage(err?.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container py-12">
        <div className="max-w-md mx-auto">
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
            <p className="text-sm text-gray-500 mb-6">Use demo credentials for now (admin@example.com / password)</p>

            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-200"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-2 rounded-md text-white bg-gradient-to-r from-primary-500 to-accent-500 hover:opacity-95"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>

              {message && <div className="text-sm text-center text-gray-700">{message}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
      }
