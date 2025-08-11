import React from "react";

export default function({onCategoryChange, selectedCategory}){
    return (
        <select
        value={selectedCategory}
        onChange={(e)=> onCategoryChange(e.target.value)}
        >
            <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
    )
}