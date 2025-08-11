import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prev)=> !prev);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <Header
        onDarkModeClick={handleDarkModeClick} 
        isDarkMode={isDarkMode} />
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
