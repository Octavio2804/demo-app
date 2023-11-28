// PlayersContext.js
import React, { createContext, useReducer, useContext } from 'react';

const PlayersContext = createContext();

const initialState = {
  players: [],
};

const playersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return { ...state, players: [...state.players, action.payload] };
    case 'REMOVE_PLAYER':
      return { ...state, players: state.players.filter(player => player !== action.payload) };
    default:
      return state;
  }
};

export const PlayersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(playersReducer, initialState);

  return (
    <PlayersContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayers = () => {
  const context = useContext(PlayersContext);
  if (!context) {
    throw new Error('usePlayers must be used within a PlayersProvider');
  }
  return context;
};
