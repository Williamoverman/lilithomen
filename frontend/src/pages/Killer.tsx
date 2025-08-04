import { useState, useEffect, useRef } from 'react';
import '../css/tv.css';
import KillerList from '../components/KillerList'

const RetroTVScreen = () => {
  const [isOn, setIsOn] = useState(true);
  const [isShaking, setIsShaking] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(null);

  useEffect(() => {
    if (isOn) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const generateStatic = () => {
      if (ctx == null) return;

      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;     // Red
        data[i + 1] = value; // Green
        data[i + 2] = value; // Blue
        data[i + 3] = 255;   // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      generateStatic();
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isOn]);

  const handlePunch = () => {
    setIsShaking(true);
    setIsOn(!isOn);
    
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  return (
    <div className="w-screen h-screen bg-black overflow-hidden relative">
      <div className={`w-full h-full relative ${isShaking ? 'tv-shake' : ''}`}>
        {!isOn ? (
          <>
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full opacity-80"
              style={{ imageRendering: 'pixelated' }}
            />
            
            <div 
              className="absolute inset-0 mix-blend-multiply opacity-40"
              style={{
                background: `
                  radial-gradient(circle at 30% 20%, rgba(139, 69, 19, 0.8) 0%, transparent 40%),
                  radial-gradient(circle at 70% 80%, rgba(139, 0, 0, 0.6) 0%, transparent 40%),
                  linear-gradient(45deg, rgba(101, 67, 33, 0.3) 0%, rgba(47, 27, 20, 0.5) 100%)
                `
              }}
            />
            
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-px bg-white opacity-20"
                  style={{
                    top: `${(i + 1) * 8.33}%`,
                    animation: `scanline ${2 + Math.random() * 3}s infinite linear`,
                    boxShadow: '0 0 4px rgba(255, 255, 255, 0.3)'
                  }}
                />
              ))}
            </div>
            
            <div 
              className="absolute inset-0 opacity-30 mix-blend-overlay"
              style={{
                background: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(255, 255, 255, 0.05) 2px,
                    rgba(255, 255, 255, 0.05) 3px
                  )
                `,
                animation: 'interference 0.1s infinite linear'
              }}
            />
            
            <div 
              className="absolute inset-0 mix-blend-screen opacity-20"
              style={{
                background: `
                  repeating-linear-gradient(
                    90deg,
                    rgba(255, 0, 0, 0.1) 0px,
                    rgba(0, 255, 0, 0.1) 1px,
                    rgba(0, 0, 255, 0.1) 2px,
                    transparent 3px,
                    transparent 6px
                  )
                `,
                animation: 'rgbShift 4s infinite ease-in-out'
              }}
            />
            
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(
                    ellipse 80% 60% at center,
                    transparent 0%,
                    transparent 65%,
                    rgba(0, 0, 0, 0.3) 85%,
                    rgba(0, 0, 0, 0.8) 100%
                  )
                `
              }}
            />
            
            <div 
              className="absolute inset-0 mix-blend-difference opacity-30"
              style={{
                background: `
                  linear-gradient(
                    0deg,
                    transparent 20%,
                    rgba(255, 255, 255, 0.1) 21%,
                    rgba(255, 255, 255, 0.1) 22%,
                    transparent 23%,
                    transparent 60%,
                    rgba(255, 255, 255, 0.15) 61%,
                    rgba(255, 255, 255, 0.15) 63%,
                    transparent 64%
                  )
                `,
                animation: 'glitchBars 0.3s infinite steps(3)'
              }}
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-black">
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                background: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(255, 255, 255, 0.02) 2px,
                    rgba(255, 255, 255, 0.02) 4px
                  )
                `
              }}
            />
            
            <div 
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: `
                  radial-gradient(
                    ellipse 90% 80% at center,
                    transparent 0%,
                    transparent 80%,
                    rgba(0, 0, 0, 0.1) 100%
                  )
                `
              }}
            />
            
            <div className="w-full h-full relative z-10">
              <KillerList />
            </div>
          </div>
        )}

        {/* Punch Button */}
        <button
          onClick={handlePunch}
          className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 active:from-gray-700 active:via-gray-800 active:to-gray-900 rounded-lg shadow-2xl transform transition-all duration-150 hover:scale-102 active:scale-98 flex items-center justify-center group z-50 border-2 border-gray-500 hover:border-gray-400"
          style={{
            boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.2), inset 0 -2px 4px rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.6)'
          }}
        >
          <div className="relative flex items-center justify-center w-full h-full">
            <img src="src/assets/img/tv/punch.png" alt="Punch" className="w-10 h-10 filter brightness-90 group-active:brightness-75" />
            
            {/* Button label */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs font-mono tracking-wider">
              PUNCH
            </div>
          </div>
        </button>

        {/* Signal Status Box */}
        <div className="absolute top-8 left-8 z-50 backdrop-blur-sm bg-black/70 px-4 py-3 rounded border border-gray-600/50 shadow-lg">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${isOn ? 'bg-green-400 animate-pulse shadow-lg shadow-green-400/50' : 'bg-red-500 animate-pulse shadow-lg shadow-red-500/50'}`}></div>
            <span className="text-gray-300 font-mono text-sm tracking-wide">
              {isOn ? 'SIGNAL DETECTED' : 'NO SIGNAL'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroTVScreen;