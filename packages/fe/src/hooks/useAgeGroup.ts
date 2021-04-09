import { useEffect, useState } from 'react';
import { BASE_API_URL } from '../utils/const';

export default function useAgeGroup() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const url = `${BASE_API_URL}/api/vaccines/age-group`;
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      console.log({ result });
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading, error };
}