import React from 'react';
import { Shirt, Grid2X2 } from 'lucide-react';

interface GameSelectionProps {
  onSelectDressUp: () => void;
  onSelectMemory: () => void;
}

const GameSelection: React.FC<GameSelectionProps> = ({ 
  onSelectDressUp, 
  onSelectMemory 
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="stitch-bounce mb-4">
        {/* Placeholder for Stitch image */}
        <div className="w-40 h-40 bg-blue-400 rounded-full overflow-hidden flex items-center justify-center">
          <span className="text-white text-2xl">Stitch</span>
        </div>
      </div>

      <div className="dialog-box p-6 mb-8 w-full max-w-xs text-center">
        <h2 className="text-3xl font-bold text-blue-600">Want to play?</h2>
      </div>

      <div className="w-full max-w-xs">
        <button 
          className="btn-game"
          onClick={onSelectDressUp}
        >
          <Shirt className="inline-block mr-2" size={24} />
          Dress Up Stitch
        </button>
        
        <button 
          className="btn-game memory"
          onClick={onSelectMemory}
        >
          <Grid2X2 className="inline-block mr-2" size={24} />
          Memory Card Match
        </button>
      </div>
    </div>
  );
};

export default GameSelection;