const cohortName = "2302-ACC-PT-WEB-PT-C";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const result = await response.json();
    const allPlayers = result.data.players;
    return allPlayers;
  } catch (err) {
    console.error("Uh oh, trouble fetching players!", err);
    return [];
  }
};

export const addNewPlayer = async (player) => {
  try {
    const response = await fetch(`${APIURL}/players`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(player), 
    });

    // Handle response here if needed

    if (response.ok) {
      console.log('Player added successfully');
    } else {
      console.error('Failed to add player:', response.statusText);
    }                  
  } catch (err) {
    console.error('Uh oh, trouble adding a new player!', err);
  }
};


export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`);

    if (response.ok) {
      const result = await response.json();
      return result.data.player; 
    } else {
      console.error('Failed to fetch single player:', response.statusText);
      return null;
    }
  } catch (err) {
    console.error('Uh oh, trouble fetching a single player!', err);
    return null;
  }
};


