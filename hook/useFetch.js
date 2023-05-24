import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
  console.log(endpoint, query, 'endpoint && query');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': 'd2c72ffa0dmshbb564dc4f436b87p12c7bbjsncde1a641df50',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: {...query},
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);     
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.error(
          'Request failed with status code 429 - Too Many Requests',
        );
        console.log(error,'eror');
        console.error(error);
      }
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return {data, isLoading, error, refetch};
};

export default useFetch;
