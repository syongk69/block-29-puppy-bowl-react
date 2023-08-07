import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={"/NewPlayerForm"}>Add New Player</Link>
    </div>
  );
};
