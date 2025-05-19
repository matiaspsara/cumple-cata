import React, { useState, useEffect } from 'react';
import { ArrowLeftCircle } from 'lucide-react';
import { useGameContext } from '../contexts/GameContext';
import Card from './Card';

interface MemoryGameProps {
  onBackToMenu: () => void;
}

const MemoryGame: React.FC<MemoryGameProps> = ({ onBackToMenu }) => {
  const { cards } = useGameContext();
  const [gameCards, setGameCards] = useState<any[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  
  // Initialize game
  useEffect(() => {
    // Create pairs of cards and shuffle them
    const cardPairs = [...cards, ...cards].map((card, index) => ({
      ...card,
      id: index,
      isFlipped: false,
      isMatched: false
    }));
    
    // Shuffle cards
    const shuffledCards = shuffleArray(cardPairs);
    setGameCards(shuffledCards);
  }, [cards]);
  
  // Check if all cards are matched
  useEffect(() => {
    if (matchedCards.length > 0 && matchedCards.length === gameCards.length) {
      // Game won
      setTimeout(() => {
        setHasWon(true);
      }, 500);
    }
  }, [matchedCards, gameCards]);
  
  // Handle card click
  const handleCardClick = (id: number) => {
    // Prevent clicks during checking or if card is already flipped/matched
    if (
      isChecking || 
      flippedCards.includes(id) || 
      matchedCards.includes(id) ||
      flippedCards.length >= 2
    ) {
      return;
    }
    
    // Flip the card
    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);
    
    // If we have flipped 2 cards, check for a match
    if (newFlippedCards.length === 2) {
      setIsChecking(true);
      
      const [firstId, secondId] = newFlippedCards;
      const firstCard = gameCards.find(card => card.id === firstId);
      const secondCard = gameCards.find(card => card.id === secondId);
      
      if (firstCard.pairId === secondCard.pairId) {
        // Match found
        setMatchedCards([...matchedCards, firstId, secondId]);
        setFlippedCards([]);
        setIsChecking(false);
      } else {
        // No match, flip cards back after a delay
        setTimeout(() => {
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };
  
  // Shuffle array helper
  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Reset game
  const resetGame = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setHasWon(false);
    setIsChecking(false);
    
    // Reshuffle cards
    const shuffledCards = shuffleArray(gameCards.map(card => ({
      ...card,
      isFlipped: false,
      isMatched: false
    })));
    setGameCards(shuffledCards);
  };

  return (
    <div className="pt-4 min-h-[90vh] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <button 
          className="btn-back"
          onClick={onBackToMenu}
        >
          <ArrowLeftCircle className="inline-block mr-1" size={20} />
          Back
        </button>
        <h2 className="text-2xl font-bold text-purple-600">Memory Match</h2>
      </div>
      
      <div className="flex-1 flex flex-col items-center">
        <div className="grid grid-cols-3 gap-4 mb-4 w-full max-w-xs">
          {gameCards.map(card => (
            <Card 
              key={card.id}
              id={card.id}
              image={card.image}
              isFlipped={flippedCards.includes(card.id) || matchedCards.includes(card.id)}
              isMatched={matchedCards.includes(card.id)}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div>
      </div>
      
      {/* Win message overlay */}
      {hasWon && (
        <div className="win-message">
          <div className="win-message-text">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">You Win!</h2>
            <div className="flex space-x-4">
              <button 
                className="btn-back"
                onClick={resetGame}
              >
                Play Again
              </button>
              <button 
                className="btn-primary"
                onClick={onBackToMenu}
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;