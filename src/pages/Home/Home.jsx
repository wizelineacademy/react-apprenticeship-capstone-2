import React, { useEffect, useState } from 'react';

import useFetch from '../../utils/hooks/usefetch';
import DatePicker from '../../components/Datepicker/DatePicker'
import NasaContent from '../../components/NasaContent/NasaContent';

const Home = () => {
    const [date, setDate] = useState(' ');
    const key = process.env.REACT_APP_API_KEY
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`
    const response = useFetch(url);

    const handleDate = (e) => {
        e.preventDefault();
        setDate(e.target.value);
    };

    if (!response.data) {
        return <div>Loading...</div>;
      }
    const { url: urlContent, explanation, media_type, title } = response.data;
  return (
    <div>
      <h1>Hello choose a date to se a nasa pic</h1>
      <DatePicker date={date} handleDate={handleDate}/>
      {
          date ?  <NasaContent type={media_type} url={urlContent} /> : null
      }
      <p>{title}</p>
      <p>{explanation}</p>
    </div>
  );
}

export default Home;
