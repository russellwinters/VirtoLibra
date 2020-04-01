import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";
import styled from "styled-components";

const ReviewInputDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
export default function PostToFeed({ match, refresh }) {
  const [modalStatus, setModalStatus] = useState(false);

  const toggleModal = () => {
    setModalStatus(!modalStatus);
  };

  const postReview = event => {
    event.preventDefault();
    let book = event.target.book.value;
    let post = event.target.post.value;
    let author = event.target.author.value;
    let newFeedItem = {
      book,
      post,
      author
    };

    axios({
      method: "post",
      url: `http://localhost:5000/api/feed/${match.params.genre}`,
      data: newFeedItem
    }).then(response => {
      console.log(response.data);
      window.location.reload();
    });
  };

  const initialInput = (
    <div onClick={toggleModal}>
      <h3>Post your review here</h3>
      <input className="review_input" type="text" placeholder="review..." />
    </div>
  );

  const reviewForm = (
    <div>
      <h3>Post your review here</h3>
      <form onSubmit={postReview}>
        <ReviewInputDiv>
          <label>Reviewer Name:</label>
          <input
            className="review_input"
            type="text"
            name="author"
            placeholder="Your Name"
          />

          <label>Book Name:</label>
          <input
            className="review_input"
            type="text"
            name="book"
            placeholder="Book Name"
          />

          <label>Review:</label>
          <input
            className="review_input"
            type="text"
            name="post"
            placeholder="Thought on the book?"
          />
        </ReviewInputDiv>
        <ButtonDiv>
          <Button>Submit Review!</Button>
        </ButtonDiv>
      </form>
      <p>
        Don't want to submit a review?
        <span onClick={toggleModal} style={{ fontWeight: "bold" }}>
          Click Here
        </span>
      </p>
    </div>
  );

  return <div>{modalStatus ? reviewForm : initialInput}</div>;
}
