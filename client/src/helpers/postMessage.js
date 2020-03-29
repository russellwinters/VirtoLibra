import React, { useContext } from "react";
import { FirebaseContext } from "../context/firebase";

const PostMessage = (id, obj) => {
  const db = useContext(FirebaseContext);

  if (obj.author && obj.book_author && obj.book_title && obj.message) {
    db.collection("rooms")
      .doc(id)
      .collection("messages")
      .add(obj)
      .then(docRef => console.log(`Post written with ID: ${docRef}`))
      .catch(err => console.log(err));
    return console.log("Object submitted");
  }
  return console.log(
    "Object requires fields: 'author', 'book_author', 'book_title', 'message'"
  );
};

export default PostMessage;
