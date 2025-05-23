import React, { useState, useRef, useEffect } from 'react';
import { Accessory } from '../types';

interface AccessoryItemProps {
  accessory: Accessory;
  onDrop: (accessory: Accessory, x: number, y: number) => void;
}

const AccessoryItem: React.FC<AccessoryItemProps> = ({ accessory, onDrop }) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const accessoryRef = useRef<HTMLDivElement>(null);
  
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
  
  // Handle mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
    
    // Add document-level event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      moveDrag(e.clientX, e.clientY);
    }
  };
  
  const handleMouseUp = (e: MouseEvent) => {
    if (isDragging) {
      endDrag(e.clientX, e.clientY);
      
      // Remove document-level event listeners
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  };
  
  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      startDrag(touch.clientX, touch.clientY);
      e.preventDefault(); // Prevent any default touch behavior
    }
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      const touch = e.touches[0];
      moveDrag(touch.clientX, touch.clientY);
      e.preventDefault(); // Prevent scrolling while dragging
    }
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isDragging) {
      if (e.changedTouches.length === 1) {
        const touch = e.changedTouches[0];
        endDrag(touch.clientX, touch.clientY);
      } else {
        setIsDragging(false);
      }
    }
  };
  
  // Drag helpers
  const startDrag = (x: number, y: number) => {
    dragStartPos.current = { x, y };
    currentPos.current = { x, y };
    setIsDragging(true);
  };
  
  const moveDrag = (x: number, y: number) => {
    currentPos.current = { x, y };
    
    // Update the visual position of the dragged element if needed
    if (accessoryRef.current && isDragging) {
      const ghostElement = document.getElementById('accessory-ghost');
      if (ghostElement) {
        ghostElement.style.left = `${x - 40}px`;
        ghostElement.style.top = `${y - 40}px`;
      } else {
        // Create ghost element on first move
        const ghost = document.createElement('div');
        ghost.id = 'accessory-ghost';
        ghost.className = 'fixed pointer-events-none z-50';
        ghost.style.left = `${x - 40}px`;
        ghost.style.top = `${y - 40}px`;
        ghost.style.width = '80px';
        ghost.style.height = '80px';
        
        // Create the image inside the ghost
        const img = document.createElement('img');
        img.src = accessory.src;
        img.className = 'w-full h-full object-contain';
        ghost.appendChild(img);
        
        document.body.appendChild(ghost);
      }
    }
  };
  
  const endDrag = (x: number, y: number) => {
    const ghostElement = document.getElementById('accessory-ghost');
    if (ghostElement) {
      document.body.removeChild(ghostElement);
    }
    
    setIsDragging(false);
    onDrop(accessory, x, y);
  };

  return (
    <div 
      ref={accessoryRef}
      className="accessory bg-gray-100 p-2 rounded-lg shadow flex items-center justify-center h-24"
      style={{ touchAction: "none" }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <img 
        src={accessory.src}
        alt={accessory.name}
        className="w-16 h-16 object-contain"
      />
    </div>
  );
};

export default AccessoryItem;