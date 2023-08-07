import React from "react";
import { useState, useEffect } from "react";

export const AddPlayerForm = () => {
  //Form State Managment
  const [playerName, setPlayerName] = useState("");
  const [playerBreed, setPlayerBreed] = useState("");
  const [isOnField, setIsOnField] = useState(false);
  const [playerPicture, setPlayerPicture] = useState(null);
  //Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    //Form POST
    const postFormSubmission =
      "https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-pt-web-pt-d/players/";

    const submitPlayerForm = async () => {
      try {
        const response = await fetch(postFormSubmission, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: playerName,
            breed: playerBreed,
            isOnField: isOnField,
            picture: playerPicture,
          }),
        });
        const result = await response.json();
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    };
    // Call the function to trigger the POST request
    submitPlayerForm();
  };

  return (
    <>
      <div>
        {/* Page Title */}
        <h1>Add A New Player:</h1>
        {/* New Player Form */}
        <div className="newplayerform">
          {/* Name Input */}
          <label htmlFor="Name">What is your Player's Name?</label>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          {/* Breed Input */}
          <label htmlFor="Breed">What is the Breed?</label>
          <input
            type="text"
            value={playerBreed}
            onChange={(e) => setPlayerBreed(e.target.value)}
          />
          {/* Status */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <label htmlFor="Status" style={{ marginRight: "10px" }}>
              On the Field?
            </label>
            <input
              type="checkbox"
              checked={isOnField}
              onChange={(e) => setIsOnField(e.target.checked)}
            />
          </div>
          {/* Upload Picture */}
          <label htmlFor="Picture">Would you like to add a picture?</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPlayerPicture(e.target.files[0])}
          />
          <button type="submit" onClick={handleSubmit}>
            Add New Player!
          </button>
        </div>
      </div>
    </>
  );
};
