import React, {createContext} from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {config} from "./config";

firebase.initializeApp(config);
const db = firebase.firestore()

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({children}) => (
  <FirebaseContext.Provider value={db}>
    {children}
  </FirebaseContext.Provider>
)
