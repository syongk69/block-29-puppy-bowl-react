import React from "react";

export const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};
