import React from 'react';
import { Sparkles } from 'lucide-react';

interface CardProps {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ 
  id, 
  image, 
  isFlipped, 
  isMatched, 
  onClick 
}) => {
  return (
    <div 
      className={`memory-card aspect-square ${isFlipped ? 'flipped' : ''} ${isMatched ? 'opacity-70' : ''}`}
      onClick={onClick}
    >
      <div className="memory-card-inner h-full w-full">
        <div className="memory-card-front bg-white">
          {/* This would be an actual image in production */}
          <div className="w-16 h-16 bg-blue-100 rounded-full overflow-hidden flex items-center justify-center">
            <span className="text-xs text-center">{id % 6 + 1}</span>
          </div>
        </div>
        <div className="memory-card-back">
          <Sparkles className="text-white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Card;