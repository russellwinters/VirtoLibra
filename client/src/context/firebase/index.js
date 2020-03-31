import React, {createContext, useState} from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {config} from "./config";

firebase.initializeApp(config);
const db = firebase.firestore();
const auth = firebase.auth();

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({children}) => {
  const [user, setUser] = useState();

  return (
    <FirebaseContext.Provider value={{db, auth, user, setUser}}>
      {children}
    </FirebaseContext.Provider>
  );
};
