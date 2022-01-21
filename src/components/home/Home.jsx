import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledHome } from "./StyledHome";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const url =
    "https://api.nasa.gov/planetary/apod?api_key=htUR37htxLa2uzoId9iBRClwvNfUI6WtjIse14TA&date=";
  //   const API_KEY = process.env.REACT_APP_API_KEY;

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
        <ReactDatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </StyledHome>
  );
}
