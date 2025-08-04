import { useEffect, useState } from 'react';
import { fetchKillers } from '../services/api';
import type { Killer } from '../services/api';

const KillersList = () => {
  const [killers, setKillers] = useState<Killer[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadKillers = async () => {
      try {
        const data = await fetchKillers();
        setKillers(data);
      } catch (err) {
        setError('Failed to load killers');
      }
    };
    loadKillers();
  }, []);

  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!killers.length) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Killers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {killers.map((killer) => (
          <div
            key={killer.id}
            className="bg-gray-800 text-white p-4 rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${import.meta.env.VITE_API_URL + "/" + killer.bg})`, backgroundSize: 'cover' }}
          >
            <img src={import.meta.env.VITE_API_URL + "/" + killer.icon} alt={killer.killer_name} className="w-16 h-16 mb-2" />
            <h2 className="text-xl font-semibold">{killer.killer_name}</h2>
            <p>Name: {killer.name}</p>
            <p>Gender: {killer.gender}</p>
            <p>Power: {killer.power}</p>
            <p>Movement Speed: {killer.movement_speed}</p>
            <p>Terror Radius: {killer.terror_radius}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KillersList;