import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledHome } from "./StyledHome";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFetch from "../../utils/hooks/useFetch";

export default function Home() {
  // const date = new Date();
  // const { startDate, data, loading, error, setStartDate } = useFetch(date);
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (error) {
    return <p>There was an error, please try again.</p>;
  }

  return (
    <StyledHome>
      {loading ? <p>Loading...</p> : <img src={data.url} alt={data.title} />}
      {data && !loading && (
        <div>
          <h1 data-testid="title">{data.title}</h1>
          <h3 data-testid="date">{data.date}</h3>
          <h4 data-testid="copyright">{data.copyright}</h4>
          <p data-testid="explanation">{data.explanation}</p>
          <h4>Select a past date:</h4>
          <ReactDatePicker
            maxDate={new Date()}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      )}
    </StyledHome>
  );
}
