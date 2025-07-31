import { useState, useEffect } from 'react';
import { Twitch, Twitter, Youtube, Instagram } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlightTwitchHomepage = () => {
  const [isLive, setIsLive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate live status changes
    const interval = setInterval(() => {
      setIsLive(prev => Math.random() > 0.7 ? !prev : prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-amber-900 relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/10 to-black/50"></div>
        {/* Cracked earth texture simulation */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(0, 0, 0, 0.5) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Serum Drips from Top Right */}
      <div className="absolute top-0 right-0 w-64 h-full pointer-events-none overflow-hidden">
        {/* Long drip */}
        <div className="absolute top-0 right-12 w-2 h-96 bg-gradient-to-b from-amber-400 via-orange-500 to-transparent rounded-full opacity-80 shadow-lg shadow-amber-400/50"></div>
        {/* Medium drip */}
        <div className="absolute top-0 right-20 w-1 h-64 bg-gradient-to-b from-yellow-400 via-amber-500 to-transparent rounded-full opacity-60 shadow-md shadow-yellow-400/30"></div>
        {/* Short drip */}
        <div className="absolute top-0 right-8 w-3 h-32 bg-gradient-to-b from-orange-400 via-amber-600 to-transparent rounded-full opacity-70 shadow-lg shadow-orange-400/40"></div>
        {/* Splatter effects */}
        <div className="absolute top-32 right-10 w-4 h-4 bg-amber-500 rounded-full opacity-50 shadow-md shadow-amber-500/50"></div>
        <div className="absolute top-48 right-16 w-2 h-2 bg-orange-400 rounded-full opacity-60 shadow-sm shadow-orange-400/40"></div>
      </div>



      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-8 py-12 mt-15">
        {/* Header Section */}  
        <div className="text-center mb-12">
          {/* lilithOmen Name */}
          <h1 className="text-8xl font-bold mb-4">
            <span className="bg-gradient-to-b from-white via-amber-200 to-amber-400 bg-clip-text text-transparent filter drop-shadow-2xl">
              LilithOmen
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-2xl text-amber-300 font-semibold italic mb-8 opacity-90">
            #1 Giga Chad Blight
          </p>
        </div>

        {/* Live Status Indicator */}
        <div className="flex justify-center mb-8">
          <div className={`flex items-center space-x-3 px-6 py-3 rounded-full border-2 ${
            isLive 
              ? 'border-amber-500 bg-amber-500/10 shadow-lg shadow-amber-500/30' 
              : 'border-red-800 bg-red-900/20 shadow-lg shadow-red-800/30'
          }`}>
            <div className={`w-4 h-4 rounded-full ${
              isLive 
                ? 'bg-amber-400 shadow-lg shadow-amber-400/50 animate-pulse' 
                : 'bg-red-600 shadow-lg shadow-red-600/50'
            }`}></div>
            <span className={`font-semibold ${
              isLive ? 'text-amber-300' : 'text-red-300'
            }`}>
              {isLive ? 'LIVE - Experimenting in the Fog' : 'OFFLINE - Brewing New Horrors'}
            </span>
          </div>
        </div>

        {/* Random DBD Build Generator Button */}
        <div className="flex justify-center mb-12">
          <button
            className="group relative px-8 py-4 bg-gradient-to-r font-semibold italic from-amber-600 via-orange-600 to-amber-700 rounded-lg border-2 border-amber-500 shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => navigate('/selection')}
          >
            Random Perk Build
          </button>
        </div>

        {/* Navigation - Test Tube Style */}
        <div className="flex justify-center space-x-8 mb-8">
          {[
            { icon: Twitch, label: 'Twitch', color: 'from-purple-500 to-purple-700' },
            { icon: Twitter, label: 'Twitter', color: 'from-blue-400 to-blue-600' },
            { icon: Youtube, label: 'YouTube', color: 'from-red-500 to-red-700' },
            { icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-purple-600' }
          ].map(({ icon: Icon, label, color }) => (
            <a
              key={label}
              href="#"
              className="group flex flex-col items-center space-y-2 p-4 rounded-lg border-2 border-amber-600/30 bg-gradient-to-b from-gray-900/60 to-black/40 hover:border-amber-500/60 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-black/50"
            >
              {/* Test tube liquid effect */}
              <div className="relative w-12 h-16 rounded-t-full rounded-b-lg border-2 border-amber-500/60 bg-gradient-to-b from-transparent to-amber-900/40 overflow-hidden">
                <div className={`absolute bottom-0 w-full h-8 bg-gradient-to-t ${color} opacity-70 shadow-lg group-hover:h-12 transition-all duration-300`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-amber-200 relative z-10" />
                </div>
              </div>
              <span className="text-amber-300 font-semibold text-sm group-hover:text-amber-200 transition-colors duration-300">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-amber-400/60 text-sm italic">
            "Death is only the beginning."
          </p>
        </div>
      </div>

      {/* Boarded Up LO Logo - Bottom Left */}
      <div className="absolute bottom-8 left-8 z-20">
        <div className="relative w-24 h-32 transform -rotate-12">
          {/* Wooden plank */}
          <div className="w-full h-full bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-800 rounded-sm shadow-2xl shadow-black/60 border-2 border-amber-700/80">
            {/* Wood grain texture */}
            <div className="absolute inset-0 opacity-30">
              <div className="w-full h-0.5 bg-amber-600 absolute top-2"></div>
              <div className="w-full h-0.5 bg-amber-600 absolute top-6"></div>
              <div className="w-full h-0.5 bg-amber-600 absolute top-10"></div>
              <div className="w-full h-0.5 bg-amber-600 absolute top-14"></div>
              <div className="w-full h-0.5 bg-amber-600 absolute top-18"></div>
              <div className="w-full h-0.5 bg-amber-600 absolute top-22"></div>
              <div className="w-full h-0.5 bg-amber-600 absolute top-26"></div>
            </div>
            
            {/* Engraved LO */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-amber-950 opacity-80 select-none" style={{textShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'}}>
                LO
              </span>
            </div>
            
            {/* Nails/screws in corners */}
            <div className="absolute top-1 left-1 w-2 h-2 bg-gray-700 rounded-full shadow-inner"></div>
            <div className="absolute top-1 right-1 w-2 h-2 bg-gray-700 rounded-full shadow-inner"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 bg-gray-700 rounded-full shadow-inner"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 bg-gray-700 rounded-full shadow-inner"></div>
          </div>
          
          {/* Boards/planks layered effect */}
          <div className="absolute -top-1 -left-1 w-6 h-full bg-gradient-to-r from-amber-800 to-amber-700 rounded-sm opacity-80 -z-10 transform rotate-3"></div>
          <div className="absolute -top-1 -right-1 w-4 h-full bg-gradient-to-r from-amber-700 to-amber-600 rounded-sm opacity-60 -z-10 transform -rotate-2"></div>
        </div>
      </div>

      {/* Additional atmospheric effects */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default BlightTwitchHomepage;