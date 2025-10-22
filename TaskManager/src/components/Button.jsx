import React from "react";

function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses = "px-4 py-2 rounded font-semibold transition-colors duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
