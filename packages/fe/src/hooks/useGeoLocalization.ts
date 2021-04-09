import { useEffect, useState } from "react";
import { BASE_API_URL } from "../utils/const";

interface Coordinates {
  latitude: number;
  longitude: number;
  city: string;
}

export default function useGeoLocalization({ place }: { place: string }) {
  const [coordinates, setCoordinates] = useState<Coordinates>({ latitude: 0, longitude: 0, city: '' });

  useEffect(() => {
    const fetchData = async () => {
      const url = `${BASE_API_URL}/api/geo`;
      const search = new URLSearchParams({ place }).toString();
      const response = await fetch(`${url}?${search}`);
      const { latitude, longitude, city } = await response.json();
      if(latitude && longitude && city) {
        setCoordinates({ latitude, longitude, city });
      }
    };

    fetchData();
  }, [place])

  return coordinates;  
}
