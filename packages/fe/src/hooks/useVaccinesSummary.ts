import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../utils/const';

export default function useVaccinesSummary() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const url = `${BASE_API_URL}/api/vaccines/summary`;
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      if(result) {
        setData(result);
      } else {
        setError('Errore di caricamento vaccini');
      }
      setLoading(false);
    };

    fetchData();
  }, [])

  return { data, loading, error };
}