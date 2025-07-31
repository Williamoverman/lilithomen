import { useNavigate } from 'react-router-dom';

export default function Selection() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen">
      <div
        className="flex-1 bg-survivor-primary text-white flex items-center justify-center cursor-pointer transition"
        onClick={() => navigate('/survivor')}
      >
        <div className="flex flex-col">
          <img 
            src="../src/assets/img/icons/survivor_icon.png" 
            alt="Survivor Icon" 
            className="w-50 h-50 mb-4"
          />
        </div>
      </div>
      <div
        className="flex-1 bg-killer-primary text-white flex items-center justify-center cursor-pointer transition"
        onClick={() => navigate('/killer')}
      >
        <div className="flex flex-col">
          <img 
            src="../src/assets/img/icons/killer_icon.png" 
            alt="Killer Icon" 
            className="w-50 h-50 mb-4"
          />
        </div>
      </div>
    </div>
  );
}