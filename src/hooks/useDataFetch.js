import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

function useDataFetch(date) {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: {}, loading: true, error: null });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `  https://api.nasa.gov/planetary/apod?api_key=LTya7xFR4RzNqYrUP6EjxZJcs1FI7nmHb0GX2cgc&date=${date}`
        );
        setState({
          data: result.data,
          loading: false,
          error: null,
        });
      } catch (e) {
        setState({
          data: null,
          loading: false,
          error: 'There was an error, please try again',
        });
      }
    };
    fetchData();
  }, []);

  return state;
}

export default useDataFetch;
