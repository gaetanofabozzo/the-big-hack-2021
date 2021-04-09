import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../utils/const';

export default function useMunicipalitiesVaccines() {
  const [vaccines, setVaccines] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const url = `${BASE_API_URL}/api/vaccines/municipalities`;
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      console.log({ result });
      setVaccines(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { vaccines, loading, error };
}