import React from "react";
import { useRoom, useRooms } from "../hooks";
import ReviewsListItem from "./ReviewsListItem";

const MessageList = ({ id }) => {
  const messages = useRoom(id);

  if (!messages) return <p>loading messages...</p>;

  return (
    <ul>
      {messages.map(({ id, message, author, book_title, book_author }) => (
        <ReviewsListItem key={id}>
          <p>
            {book_title} by {book_author}
          </p>

          <p>
            {author}: {message}{" "}
          </p>
        </ReviewsListItem>
      ))}
    </ul>
  );
};

const RoomList = () => {
  const rooms = useRooms();

  if (!rooms) return <p>loading rooms...</p>;

  return (
    <ul>
      {rooms.map(({ id }) => (
        <ReviewsListItem key={id}>
          Room: {id}
          <MessageList id={id} />
        </ReviewsListItem>
      ))}
    </ul>
  );
};

const FirebaseExample = () => <RoomList />;

export default FirebaseExample;
