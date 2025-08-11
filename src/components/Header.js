import React from "react";

export default function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </>
  );
}
