import {useContext, useState, useEffect} from "react";
import {FirebaseContext} from "../context/firebase";

export const useRooms = () => {
  const {db} = useContext(FirebaseContext);
  const [rooms, setRooms] = useState();

  useEffect(() => {
    db.collection("rooms").get().then(snapshot => {
      const rooms = [];
      snapshot.forEach(room => rooms.push({id: room.id}));
      setRooms(rooms);
    });
  }, [db]);

  return rooms;
}

