import { useState, useEffect } from 'react';
import { fetchKillers } from '../services/api';

interface Killer {
  id: number;
  killer_name: string;
  name: string;
  gender: string;
  power: string;
  movement_speed: number;
  terror_radius: number;
  icon: string;
  bg: string;
}

const KillerList = () => {
  const [killers, setKillers] = useState<Killer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getKillers = async () => {
      try {
        const data = await fetchKillers();
        setKillers(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setLoading(false);
      }
    };
    getKillers();
  }, []);

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Killers</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {killers.map((killer) => (
          <li key={killer.id} className="bg-white shadow rounded-lg p-4">
            {killer.icon && <img src={`${import.meta.env.VITE_API_URL}/${killer.icon}`} alt={killer.killer_name} className="w-32 h-32 mb-2" />}
            <h2 className="text-lg font-semibold">{killer.killer_name}</h2>
            <p>Power: {killer.power}</p>
            <p>Speed: {killer.movement_speed}</p>
            <p>Terror Radius: {killer.terror_radius}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KillerList;