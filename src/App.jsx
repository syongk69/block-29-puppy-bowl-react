import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AddPlayerForm } from "./components/AddPlayerForm";
import { AllPlayers } from "./components/AllPlayers";
import { SearchBar } from "./components/SearchBar";
import { PlayerDetails } from "./components/PlayerDetails";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="home">
        <h1>Puppy Bowl v2.0</h1>
      </div>
      <div className="main-section">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/NewPlayerForm" element={<AddPlayerForm />} />
          <Route path="/PlayerDetails/:id" element={<PlayerDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
