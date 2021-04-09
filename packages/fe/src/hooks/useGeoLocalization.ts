import { useEffect, useState } from "react";
import { BASE_API_URL } from "../utils/const";

interface Coordinates {
  latitude: number;
  longitude: number;
  name: string;
}

export default function useGeoLocalization({ place }: { place: string }) {
  const [coordinates, setCoordinates] = useState<Coordinates>({ latitude: 0, longitude: 0, name: '' });
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `${BASE_API_URL}/api/geo`;
      const search = new URLSearchParams({ place }).toString();
      const response = await fetch(`${url}?${search}`);
      const { latitude, longitude, name } = await response.json();
      setCoordinates({ latitude, longitude, name });
      setLoading(false);
    };

    fetchData();
  }, [place])

  return { coordinates, loading, error };  
}
