import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewsListItem from "./ReviewsListItem";

const FirebaseExample = ({ match }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null || data.genre !== match.params.genre) {
      axios
        .get(`http://localhost:5000/api/feed/${match.params.genre}`)
        .then(response => {
          console.log(response.data.data);
          setData(response.data.data);
        });
    }
  });

  if (data) {
    let feed = data.feed.map(post => {
      return (
        <div>
          <h3>{post.book}</h3>
          <p>{post.post}</p>
        </div>
      );
    });

    return (
      <section style={{ display: "flex", flexDirection: "column" }}>
        <h1>{data.genre}</h1>
        {feed}
      </section>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default FirebaseExample;
