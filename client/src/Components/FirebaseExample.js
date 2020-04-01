import React, { useState, useEffect } from "react";
import axios from "axios";
import ReviewsListItem from "./ReviewsListItem";
import PostToFeed from "./PostToFeed";

const FirebaseExample = ({ match }) => {
  const [data, setData] = useState(null);
  const [submit, setSubmit] = useState(false);

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
          <p>{post.author ? `Author: ${post.author}` : ""}</p>
          <p>Review: {post.post}</p>
        </div>
      );
    });

    const refreshAfterSubmit = () => {
      setSubmit(!submit);
    };

    return (
      <section style={{ display: "flex", flexDirection: "column" }}>
        <h1>{data.genre}</h1>

        <PostToFeed match={match} refresh={refreshAfterSubmit} />
        {feed}
      </section>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default FirebaseExample;
