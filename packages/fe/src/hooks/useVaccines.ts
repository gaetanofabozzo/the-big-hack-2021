import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../utils/const';
// import { vaccinesByDate } from '../__mocks__/vaccines';

export default function useVaccines() {
  const [vaccines, setVaccines] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const url = `${BASE_API_URL}/api/vaccines/date`;
      setLoading(true);
      const response = await fetch(url);
      const vaccinesByDate = await response.json();
      if(vaccinesByDate) {
        // @ts-ignore
        const reducedVaccines = Object.entries(vaccinesByDate).reduce((acc, [timestamp, vaccine]) => {
          // @ts-ignore
          const newVaccine = { ...vaccine, timestamp: new Date(timestamp).toISOString().split('T')[0] };
          return  [...acc, newVaccine];
        }, []);
        setVaccines(reducedVaccines);
      } else {
        setError('Errore di caricamento vaccini');
      }
      setLoading(false);
    };

    fetchData();
  }, [])

  return { vaccines, loading, error };
}