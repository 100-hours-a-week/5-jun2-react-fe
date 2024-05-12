import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(
    function getBoardList() {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    },
    [url],
  );

  return data;
};

export default useFetch;
