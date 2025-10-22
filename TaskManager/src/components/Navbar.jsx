import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">React Week 3 Project</h1>

      <div className="flex items-center gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/tasks" className="hover:underline">Tasks</Link>
        <Link to="/api" className="hover:underline">API List</Link>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="bg-white text-blue-600 px-2 py-1 rounded"
        >
          {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
}
