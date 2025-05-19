import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import GameSelection from './components/GameSelection';
import DressUpGame from './components/DressUpGame';
import MemoryGame from './components/MemoryGame';
import { GameProvider } from './contexts/GameContext';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [childName] = useState('Cata'); // You can make this configurable

  const navigateTo = (screen: string) => {
    setCurrentScreen(screen);
  };

  return (
    <GameProvider>
      <div className="App min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-4">
        <div className="mx-auto max-w-md">
          {currentScreen === 'welcome' && (
            <WelcomeScreen name={childName} onNext={() => navigateTo('selection')} />
          )}
          
          {currentScreen === 'selection' && (
            <GameSelection 
              onSelectDressUp={() => navigateTo('dressup')} 
              onSelectMemory={() => navigateTo('memory')} 
            />
          )}
          
          {currentScreen === 'dressup' && (
            <DressUpGame onBackToMenu={() => navigateTo('selection')} />
          )}
          
          {currentScreen === 'memory' && (
            <MemoryGame onBackToMenu={() => navigateTo('selection')} />
          )}
        </div>
      </div>
    </GameProvider>
  );
}

export default App;