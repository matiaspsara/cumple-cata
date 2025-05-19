import React, { useState, useRef } from 'react';

interface PlacedAccessoryProps {
  id: string;
  x: number;
  y: number;
  src: string;
  onDrag: (id: string, x: number, y: number) => void;
  onRemove: (id: string) => void;
}

const PlacedAccessory: React.FC<PlacedAccessoryProps> = ({ 
  id, x, y, src, onDrag, onRemove 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });
  const lastTap = useRef(0);
  
  // Handle mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    startDrag(e.clientX, e.clientY);
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      onDrag(id, e.clientX, e.clientY);
    }
  };
  
  const handleMouseUp = (e: MouseEvent) => {
    if (isDragging) {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  };
  
  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation();
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      startDrag(touch.clientX, touch.clientY);
      
      // Handle double tap to remove
      const now = Date.now();
      if (now - lastTap.current < 300) {
        onRemove(id);
      }
      lastTap.current = now;
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      e.preventDefault();
      const touch = e.touches[0];
      onDrag(id, touch.clientX, touch.clientY);
    }
  };
  
  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };
  
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove(id);
  };
  
  const startDrag = (clientX: number, clientY: number) => {
    startPos.current = { x: clientX, y: clientY };
    setIsDragging(true);
  };

  return (
    <div 
      className="placed-accessory w-20 h-20"
      style={{ 
        left: `${x - 40}px`, 
        top: `${y - 40}px`,
        touchAction: "none"
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onDoubleClick={handleDoubleClick}
    >
      {/* This would be an actual image in production */}
      <div className="w-full h-full bg-white rounded-full border-2 border-yellow-400 overflow-hidden flex items-center justify-center">
        <span className="text-xs text-center">Item</span>
      </div>
    </div>
  );
};

export default PlacedAccessory;