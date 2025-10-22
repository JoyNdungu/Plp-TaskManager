import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-200 p-4 text-center">
      <p>&copy; {new Date().getFullYear()} React Week 3 Project. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
}
