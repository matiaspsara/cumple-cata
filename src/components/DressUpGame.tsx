import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftCircle } from 'lucide-react';
import { useGameContext } from '../contexts/GameContext';
import { Accessory } from '../types';
import AccessoryItem from './AccessoryItem';
import PlacedAccessory from './PlacedAccessory';

interface DressUpGameProps {
  onBackToMenu: () => void;
}

const DressUpGame: React.FC<DressUpGameProps> = ({ onBackToMenu }) => {
  const { accessories } = useGameContext();
  const [placedAccessories, setPlacedAccessories] = useState<Array<{ id: string; x: number; y: number; type: string; src: string }>>([]);
  const stitchRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Prevent scrolling while dragging
  useEffect(() => {
    const preventScroll = (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventScroll, { passive: false });
    return () => {
      document.removeEventListener('touchmove', preventScroll);
    };
  }, [isDragging]);

  const handleDrop = (accessory: Accessory, x: number, y: number) => {
    setIsDragging(false);
    // Calculate position relative to Stitch
    if (stitchRef.current) {
      const stitchRect = stitchRef.current.getBoundingClientRect();
      const relX = x - stitchRect.left;
      const relY = y - stitchRect.top;
      
      // Add the accessory to the placed accessories
      setPlacedAccessories([...placedAccessories, {
        id: `placed-${accessory.id}-${Date.now()}`,
        x: relX,
        y: relY,
        type: accessory.type,
        src: accessory.src
      }]);
    }
  };

  const handleDragPlaced = (id: string, x: number, y: number) => {
    setIsDragging(true);
    // Update position of placed accessory
    if (stitchRef.current) {
      const stitchRect = stitchRef.current.getBoundingClientRect();
      const relX = x - stitchRect.left;
      const relY = y - stitchRect.top;
      
      setPlacedAccessories(placedAccessories.map(acc => 
        acc.id === id ? { ...acc, x: relX, y: relY } : acc
      ));
    }
  };

  const handleRemove = (id: string) => {
    setIsDragging(false);
    // Remove accessory on double click/tap
    setPlacedAccessories(placedAccessories.filter(acc => acc.id !== id));
  };

  return (
    <div className="pt-4 min-h-[90vh] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <button 
          className="btn-back"
          onClick={onBackToMenu}
        >
          <ArrowLeftCircle className="inline-block mr-1" size={20} />
          Volver
        </button>
        <h2 className="text-2xl font-bold text-purple-600">¡Vestí a Stitch!</h2>
      </div>

      <div className="flex-1 flex flex-col items-center">
        {/* Stitch character with placed accessories */}
        <div 
          ref={stitchRef} 
          className="relative w-64 h-64 mb-6 overflow-hidden flex items-center justify-center"
          style={{ touchAction: "none" }}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
        >
          <img 
            src="/images/stitch2.png" 
            alt="Stitch" 
            className="w-full h-full object-contain"
          />
          
          {/* Placed accessories */}
          {placedAccessories.map(accessory => (
            <PlacedAccessory
              key={accessory.id}
              id={accessory.id}
              x={accessory.x}
              y={accessory.y}
              src={accessory.src}
              onDrag={handleDragPlaced}
              onRemove={handleRemove}
            />
          ))}
        </div>

        {/* Accessory selection */}
        <div className="bg-white rounded-lg p-4 w-full">
          <h3 className="text-lg font-bold text-blue-600 mb-3">Accesorios</h3>
          <div className="grid grid-cols-3 gap-4">
            {accessories.map(accessory => (
              <AccessoryItem
                key={accessory.id}
                accessory={accessory}
                onDrop={handleDrop}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressUpGame;