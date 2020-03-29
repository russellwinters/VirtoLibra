import {useContext, useState, useEffect} from "react";
import {FirebaseContext} from "../context/firebase";

export const useRoom = id => {
  const {db} = useContext(FirebaseContext);
  const [messages, setMessages] = useState();

  useEffect(() => {
    db.collection("rooms").doc(id).collection("messages").get().then(snapshot => {
      const messages = [];
      snapshot.forEach(message => messages.push({
        ...message.data(),
        id: message.id,
      }));
      setMessages(messages);
    });
  }, [db, id]);

  return messages;
}
