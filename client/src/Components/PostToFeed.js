import React, { useState } from "react";
import axios from "axios";

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
      <input type="text" placeholder="review..." />
    </div>
  );

  const reviewForm = (
    <div>
      <h3>Post your review here</h3>
      <form onSubmit={postReview}>
        <div>
          <label>Reviewer Name:</label>
          <input type="text" name="author" placeholder="Your Name" />
        </div>
        <div>
          <label>Book Name:</label>
          <input type="text" name="book" placeholder="Book Name" />
        </div>
        <div>
          <label>Review:</label>
          <input type="text" name="post" placeholder="Thought on the book?" />
        </div>
        <button>Submit Review!</button>
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
