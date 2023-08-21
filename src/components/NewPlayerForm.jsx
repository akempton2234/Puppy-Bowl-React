import React, { useState } from 'react';
import { addNewPlayer } from '../API';

function NewPlayerForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const player = {
      name,
      breed,
      status: 'bench',
      imageUrl: '', 
      teamId: null,
    };

    await addNewPlayer(player);
  };

  return (
    <div>
      <h1>Add New Player</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default NewPlayerForm;
