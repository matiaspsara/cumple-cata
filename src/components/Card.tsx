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
          <img 
            src={image}
            alt={`Card ${id}`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="memory-card-back">
          <Sparkles className="text-white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Card;