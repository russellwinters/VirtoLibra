import React from "react";
import { Redirect } from "react-router-dom";

export default function AuthBoundary({ children }) {
  if (localStorage.getItem("email")) {
    return <div>{children}</div>;
  } else {
    return <Redirect to="/" />;
  }
}
