import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSinglePlayer } from '../API';

function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchPlayerDetails() {
      const singlePlayer = await fetchSinglePlayer(id);
      setPlayer(singlePlayer.data.player);
    }
    fetchPlayerDetails();
  }, [id]);

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Player Details</h1>
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
    </div>
  );
}

export default SinglePlayer;
