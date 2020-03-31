import { useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export const useUserInterests = () => {
  const {db} = useContext(FirebaseContext);

  const createUserData = (email, interests) => {
    return db.collection("users")
      .add({
        email,
        interests,
      });
  };

  const updateUserData = (email, interests) => {
    return db
      .collection("users")
      .where("email", "==", email)
      .get()
      .then(snapshot => {
        snapshot.forEach(user => { // only 1 should match
          return db.collection("users").doc(user.id)
            .set({
              interests,
            }, {merge: true})
            .then(() => alert("Interests succesfully updated!"));
        })
      });

  };

  const getUserInterests = email => {
    return db
      .collection("users")
      .where("email", "==", email)
      .get()
      .then(snapshot => {
        return snapshot.forEach(user => { // only 1 should match
          return user.data().interests;
        })
      });
  };

  return {createUserData, updateUserData, getUserInterests};
};
