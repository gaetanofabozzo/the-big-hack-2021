import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../utils/const';

export default function usePositivesOnVaccines() {
  const [positivesOnVaccines, setPositivesOnVaccines] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const url = `${BASE_API_URL}/api/vaccines/positives-on-vaccines`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      if(data) {
        setPositivesOnVaccines(data);
      } else {
        setError('Errore di caricamento vaccini');
      }
      setLoading(false);
    };

    fetchData();
  }, [])

  return { positivesOnVaccines, loading, error };
}