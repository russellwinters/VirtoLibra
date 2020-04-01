import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import PostToFeed from "./PostToFeed";

const ReviewDiv = styled.div`
  width: 33vw;
  margin-bottom: 10px;
`;
const TitleSection = styled.section`
  margin-left: 10px;
  margin-bottom: 10px;
  & h1 {
    margin-bottom: 10px;
    font-size: 2em;
  }
`;

const FirebaseExample = ({ match }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null || data.genre !== match.params.genre) {
      axios
        .get(`https://virtolibra.herokuapp.com/api/feed/${match.params.genre}`)
        .then(response => {
          setData(response.data.data);
        });
    }
  });

  if (data) {
    let feed = data.feed.map((post, i) => {
      return (
        <ReviewDiv key={i}>
          <h3>{post.book}</h3>
          <p>{post.author ? `Author: ${post.author}` : ""}</p>
          <p>Review: {post.post}</p>
        </ReviewDiv>
      );
    });

    return (
      <TitleSection style={{ display: "flex", flexDirection: "column" }}>
        <h1>{data.genre}</h1>

        <PostToFeed match={match} />
        {feed}
      </TitleSection>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default FirebaseExample;
