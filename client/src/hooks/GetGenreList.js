import { useState, useEffect } from "react";
import axios from "axios";

const GetGenreList = () => {
  const [data, setData] = useState({ data: [] });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/overview.json?&api-key=u80Uoj6gcmvGVb0vO3eQRqpbITkdcggN"
      )
      .then(res => setData(res.data.results.lists))

      .catch(err => setError(err))
      .finally(() => setLoading(false));
    console.log("inside GetGenreList", data);
  }, []);

  return { data, error, loading };
};
export default GetGenreList;
