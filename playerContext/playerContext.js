import React, { createContext, useState } from 'react';

const PlayerContext = createContext();

const MantenerPlayers = ({ children }) => {
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    setPlayers([...players, player.toUpperCase()]);
  };

  return (
    <PlayerContext.Provider value={{ players, addPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContext, MantenerPlayers };
