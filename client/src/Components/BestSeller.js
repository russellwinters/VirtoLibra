import React, { useState, useEffect } from "react";
import { useBooks } from "../hooks";
import Button from "./Button";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;

  flex-direction: column;
  & h1 {
    font-family: mainFont;
  }
`;

const StyledList = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  align-text: left;
  & header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom:10px;
    & h1 {
      
      font-size: 20px;
     
    }
    & h2 {
        font-size: 20px;
    }
  }
  & p {
      text-align: left;
      width:100%;
    }
  & h3{
    width:50px;
    font-size:25px;
    vertical-align: top;
  }
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
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
          setBookList(response.data);
        });
    }
  });

  //Changed the useBooks part so that I could render books based on the dynamic URL.
  //Thought state made more sense here.
  // const [data, loading] = useBooks(
  //   `https://api.nytimes.com/svc/books/v3/lists/current/${match.params.genre}.json?api-key=${APIkey}`
  // );

  //changed the key from rank to primary_isbn13 because the rank will change weekly but the primary_isbn13 will remain.
  if (bookList !== null) {
    return (
      <Container>
        <h1>NYT Best Sellers {bookList.results.list_name}</h1>
        {!bookList ? (
          "loading..."
        ) : (
          <ul>
            {bookList.results.books.map(
              ({
                rank,
                title,
                author,
                description,
                primary_isbn13,
                amazon_product_url
              }) => (
                <StyledList key={primary_isbn13}>
                  <header>
                    <h1>
                      {rank}. {title}
                    </h1>
                    <h2>{author}</h2>
                  </header>

                  <p>{description}</p>

                  <ButtonDiv>
                    <a href={amazon_product_url} target="_blank">
                      <Button>Purchase here</Button>
                    </a>
                  </ButtonDiv>
                </StyledList>
              )
            )}
          </ul>
        )}
      </Container>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default BestSeller;
