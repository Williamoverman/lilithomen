import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  const getRotation = () => {
    if (hoveredSide === 'left') return -12;
    if (hoveredSide === 'right') return 12;
    return 0;
  };

  return (
    <div className="flex h-screen relative overflow-hidden">
      {/* Survivor side */}
      <div
        className="flex-1 bg-survivor-primary text-white flex items-center justify-center cursor-pointer transition"
        onClick={() => navigate('/survivor')}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="flex flex-col items-center">
          <img
            src="../src/assets/img/icons/survivor_icon.png"
            alt="Survivor Icon"
            className="w-50 h-50 mb-4"
          />
        </div>
      </div>

      {/* Killer side */}
      <div
        className="flex-1 bg-killer-primary text-white flex items-center justify-center cursor-pointer transition"
        onClick={() => navigate('/killer')}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="flex flex-col items-center">
          <img
            src="../src/assets/img/icons/killer_icon.png"
            alt="Killer Icon"
            className="w-50 h-50 mb-4"
          />
        </div>
      </div>

      <div
        className="absolute top left-1/2 -translate-x-1/2 w-52 h-52 md:w-64 md:h-64 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="transition-transform duration-500 ease-in-out w-full h-full"
          style={{ 
            transform: `rotate(${getRotation()}deg)`,
            transformOrigin: '50% 20%'
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
            <line x1="10" y1="20" x2="90" y2="20" stroke="#a3a3a3" strokeWidth="3" />
            <line x1="15" y1="20" x2="25" y2="40" stroke="#a3a3a3" strokeWidth="1.5" />
            <line x1="15" y1="20" x2="5" y2="40" stroke="#a3a3a3" strokeWidth="1.5" />
            <path d="M 0 42 Q 15 55 30 42" stroke="#a3a3a3" strokeWidth="2" fill="none" />
            <line x1="85" y1="20" x2="95" y2="40" stroke="#a3a3a3" strokeWidth="1.5" />
            <line x1="85" y1="20" x2="75" y2="40" stroke="#a3a3a3" strokeWidth="1.5" />
            <path d="M 70 42 Q 85 55 100 42" stroke="#a3a3a3" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <svg viewBox="0 0 100 100" className="w-full h-full absolute top-0 left-0 drop-shadow-2xl">
          <line x1="50" y1="0" x2="50" y2="20" stroke="#a3a3a3" strokeWidth="3" />
          <circle cx="50" cy="0" r="3" fill="#a3a3a3" />
          <circle cx="50" cy="20" r="3" fill="#a3a3a3" />
        </svg>
      </div>
    </div>
  );
}