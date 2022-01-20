import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledHome } from "./StyledHome";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const NASA_URL = "https://api.nasa.gov/planetary/apod";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${NASA_URL}?api_key=htUR37htxLa2uzoId9iBRClwvNfUI6WtjIse14TA`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (!data) {
    return <p>Sorry, there is no data</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>There was an error, please try again</p>;
  }

  return (
    <StyledHome>
      <img src={data.url} alt={data.title} className="photo" />
      <div>
        <h1>{data.title}</h1>
        <h3>{data.date}</h3>
        <p className="explanation">{data.explanation}</p>
      </div>
    </StyledHome>
  );
}
