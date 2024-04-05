import { useState, useEffect } from 'react';
import axios from 'axios';
const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = () => {
    axios
      .get(url)
      .then(response => {
        setIsLoaded(true);
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      });
  };

  useEffect(() => {
    // if (!data) {
    //   console.log("no data")
    fetchData();
    // }
    // else {
    //   console.log("data", data)
    // }

  }, []);


  return { error, isLoaded, data };
};

export default useAxios