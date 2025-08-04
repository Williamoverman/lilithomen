import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);

  return (
    <div className="flex h-screen relative overflow-hidden">
      {/* Survivor side */}
      <div
        className="flex-1 bg-survivor-primary relative flex items-center justify-center cursor-pointer"
        onClick={() => navigate('/survivor')}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-50 h-50 mb-6 relative">
            <img
              src="../src/assets/img/icons/survivor_icon.png"
              alt="Survivor Icon"
            />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 tracking-wider">
            SURVIVOR
          </h2>
          <p className="text-blue-200 text-lg max-w-xs">
            Hide. Repair. Escape. Defy The Entity.
          </p>
        </div>
        
        <div className={`absolute top-10 left-10 w-20 h-20 border-l-4 border-t-4 border-[var(--survivor-border)] border-transition ${hoveredSide === 'left' ? 'opacity-70 scale-110' : 'opacity-30'}`}></div>
        <div className={`absolute bottom-10 left-10 w-20 h-20 border-l-4 border-b-4 border-[var(--survivor-border)] border-transition ${hoveredSide === 'left' ? 'opacity-70 scale-110' : 'opacity-30'}`}></div>
      </div>

      <div className={`absolute inset-y-0 left-1/2 w-1 z-20 transition-all duration-500 ease-in-out`} style={{
        background: `linear-gradient(to bottom, transparent, ${hoveredSide ? '#444' : '#666'}, transparent)`
      }}></div>
      
      {/* Killer side */}
      <div
        className="flex-1 bg-killer-primary relative flex items-center justify-center cursor-pointer"
        onClick={() => navigate('/killer')}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-50 h-50 mb-6 relative">
            <img
              src="../src/assets/img/icons/killer_icon.png"
              alt="Killer Icon"
            />
          </div>
          <h2 className="text-5xl font-bold text-white mb-4 tracking-wider">
            KILLER
          </h2>
          <p className="text-[#FFCCCC] text-lg">
            Catch meat. Sacrifice meat. Appease The Entity.
          </p>
        </div>
        
        <div className={`absolute top-10 right-10 w-20 h-20 border-r-4 border-t-4 border-[var(--killer-border)] border-transition ${hoveredSide === 'right' ? 'opacity-70 scale-110' : 'opacity-30'}`}></div>
        <div className={`absolute bottom-10 right-10 w-20 h-20 border-r-4 border-b-4 border-[var(--killer-border)] border-transition ${hoveredSide === 'right' ? 'opacity-70 scale-110' : 'opacity-30'}`}></div>
      </div>
    </div>
  );
}