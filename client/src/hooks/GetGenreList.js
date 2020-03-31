import { useState, useEffect } from "react";
import axios from "axios";
const APIkey = process.env.REACT_APP_NYT_API;

const GetGenreList = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/overview.json?&api-key=${APIkey}`
      )
      .then(res => setData(res.data.results.lists))

      .catch(err => setError(err))
      .finally(() => setLoading(false));
    console.log("inside GetGenreList", data);
  }, []);

  return { data, error, loading };
};
export default GetGenreList;
