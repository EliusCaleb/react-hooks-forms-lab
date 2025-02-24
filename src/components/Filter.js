import React from "react";
function Filter({ onCategoryChange, search, onSearchChange }) {

function handleSearch(event) {
  // console.log(event.target.value)
  onSearchChange(event.target.value)
}
// filteredProduct = products.filter(product => product.name === search)
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={handleSearch}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}
export default Filter;
