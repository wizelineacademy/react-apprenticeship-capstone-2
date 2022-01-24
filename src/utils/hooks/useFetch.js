import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(date) {
  const [startDate, setStartDate] = useState(date);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(startDate);
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=htUR37htxLa2uzoId9iBRClwvNfUI6WtjIse14TA&date=";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const formattedUrl = url + startDate.toISOString().substring(0, 10);
      try {
        const response = await axios.get(formattedUrl);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [startDate]);

  return { startDate, data, loading, error, setStartDate };
}
