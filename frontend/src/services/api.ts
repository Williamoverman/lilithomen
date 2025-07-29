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

interface ApiResponse {
  success: boolean;
  data: Killer[];
}

export const fetchKillers = async (): Promise<Killer[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/killers`);
  if (!response.ok) throw new Error('Failed to fetch killers');
  const { data }: ApiResponse = await response.json();
  return data;
};