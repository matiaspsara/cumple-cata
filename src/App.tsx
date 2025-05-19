import { useState, useRef, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import GameSelection from './components/GameSelection';
import DressUpGame from './components/DressUpGame';
import MemoryGame from './components/MemoryGame';
import { GameProvider } from './contexts/GameContext';
import './App.css';
import { Volume2, VolumeX } from 'lucide-react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [childName] = useState('Cata'); // You can make this configurable
  const [isMuted, setIsMuted] = useState(false);
  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let triedToPlay = false;
    const tryPlay = () => {
      if (musicRef.current && !isMuted) {
        musicRef.current.volume = 0.15;
        const playPromise = musicRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // If autoplay is blocked, wait for user interaction
            if (!triedToPlay) {
              triedToPlay = true;
              const resumeAudio = () => {
                musicRef.current?.play();
                window.removeEventListener('pointerdown', resumeAudio);
                window.removeEventListener('touchstart', resumeAudio);
                window.removeEventListener('click', resumeAudio);
              };
              window.addEventListener('pointerdown', resumeAudio);
              window.addEventListener('touchstart', resumeAudio);
              window.addEventListener('click', resumeAudio);
            }
          });
        }
      }
    };
    tryPlay();
    if (isMuted && musicRef.current) {
      musicRef.current.pause();
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const navigateTo = (screen: string) => {
    setCurrentScreen(screen);
  };

  return (
    <GameProvider>
      <div className="App min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-4 relative">
        {/* Background Music */}
        <audio
          ref={musicRef}
          src={import.meta.env.BASE_URL + 'images/musica.mp3'}
          loop
          autoPlay
          style={{ display: 'none' }}
        />
        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="fixed top-3 right-3 z-50 bg-white bg-opacity-80 rounded-full p-2 shadow-md border border-gray-200 focus:outline-none"
          style={{ width: 44, height: 44 }}
          aria-label={isMuted ? 'Activar música' : 'Silenciar música'}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-gray-700" />
          ) : (
            <Volume2 className="w-6 h-6 text-gray-700" />
          )}
        </button>
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