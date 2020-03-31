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

  const updateUserData = (email, interests) => {
    setInterests(interests);
    return db
      .collection("users")
      .where("email", "==", email)
      .get()
      .then(snapshot => {
        snapshot.forEach(user => { // only 1 should match
          return db.collection("users").doc(user.id)
            .set({
              interests,
            }, {
              merge: true,
            })
            .then(() => alert("Interests succesfully updated!"));
        })
      });

  };

  return {interests, createUserData, updateUserData};
};
