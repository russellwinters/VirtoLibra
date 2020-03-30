import React, { useState, useEffect } from "react";
import { useBooks } from "../hooks";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledList = styled.li`
  list-style: none;
`;

const BestSeller = ({ match }) => {
  const [bookList, setBookList] = useState(null);
  const APIkey = process.env.REACT_APP_NYT_API;

  useEffect(() => {
    if (
      bookList === null ||
      bookList.results.list_name_encoded !== match.params.genre
    ) {
      axios
        .get(
          `https://api.nytimes.com/svc/books/v3/lists/current/${match.params.genre}.json?api-key=${APIkey}`
        )
        .then(response => {
          console.log(response.data);
          setBookList(response.data);
        });
    }
  });

  //Changed the useBooks part so that I could render books based on the dynamic URL.
  //Thought state made more sense here.
  // const [data, loading] = useBooks(
  //   `https://api.nytimes.com/svc/books/v3/lists/current/${match.params.genre}.json?api-key=${APIkey}`
  // );
  return (
    <Container>
      <h1>NYT Best Sellers</h1>
      {!bookList ? (
        "loading..."
      ) : (
        <ul>
          {bookList.results.books.map(
            ({ rank, title, author, amazon_product_url }) => (
              <StyledList key={`book rank: -${rank}`}>
                <p>{title}</p>
                <p>{author}</p>
                <a href={amazon_product_url} target="_blank">
                  Purchase here
                </a>
              </StyledList>
            )
          )}
        </ul>
      )}
    </Container>
  );
};

export default BestSeller;
