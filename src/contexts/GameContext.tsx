import React, { createContext, useContext, ReactNode } from 'react';
import { Accessory, Card } from '../types';
import gameData from '../data/gameData';

interface GameContextProps {
  accessories: Accessory[];
  cards: Card[];
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  return (
    <GameContext.Provider value={gameData}>
      {children}
    </GameContext.Provider>
  );
};