import { useContext, useState } from "react";
import { FirebaseContext } from "../context/firebase";

export const useUserInterests = () => {
  const {db} = useContext(FirebaseContext);
  const [interests, setInterests] = useState();

  const createUserData = (email, interests) => {
    setInterests(interests);
    return db.collection("users")
      .add({
        email,
        interests,
      });
  };

  return {interests, createUserData};
};
