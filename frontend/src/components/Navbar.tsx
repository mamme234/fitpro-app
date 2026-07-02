import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">G</div>
          <div>
            <div className="text-lg font-semibold">Gym App Pro</div>
            <div className="text-xs text-gray-500">Train better, together</div>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/classes" className="text-sm text-gray-700 hover:text-primary-700">Classes</Link>
          <Link to="/pricing" className="text-sm text-gray-700 hover:text-primary-700">Pricing</Link>
          <Link to="/login" className="inline-flex items-center gap-2 px-3 py-2 bg-primary-500 text-white rounded-md text-sm hover:bg-primary-700">
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}
