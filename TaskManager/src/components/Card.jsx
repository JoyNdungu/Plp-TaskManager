import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white dark:bg-gray-800 border rounded p-4 shadow-md ${className}`}>
      {children}
    </div>
  );
}
