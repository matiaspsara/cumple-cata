import React, { useState, useEffect } from 'react';
import { PartyPopper } from 'lucide-react';

interface WelcomeScreenProps {
  name: string;
  onNext: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ name, onNext }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading and add animation class
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center min-h-[80vh] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mb-8 stitch-bounce">
        <img 
          src="/images/stitch.png" 
          alt="Stitch" 
          className="w-64 h-64 object-contain"
        />
      </div>

      <div className="dialog-box p-6 mb-12 w-full max-w-xs text-center">
        <PartyPopper className="inline-block text-yellow-400 mb-3" size={40} />
        <h1 className="text-3xl font-bold text-blue-600 mb-2">
          Feliz Cumple
        </h1>
        <h2 className="text-4xl font-bold text-pink-500 mb-1">{name}!</h2>
      </div>

      <button 
        className="btn-primary"
        onClick={onNext}
      >
        Siguiente
      </button>
    </div>
  );
};

export default WelcomeScreen;