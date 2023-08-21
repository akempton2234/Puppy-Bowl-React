import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllPlayers } from '../API';

function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPlayers() {
      const allPlayers = await fetchAllPlayers();
      setPlayers(allPlayers);
    }
    fetchPlayers();
  }, []);

  return (
    <div>
      <h1>All Players</h1>
      {players.map((player) => (
        <div key={player.id}>
          <h2>{player.name}</h2>
          <Link to={`/players/${player.id}`}>See Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AllPlayers;
