import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../hooks";
import InterestSelect from "./InterestSelect";

const AuthForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isCreatingNewUser, setIsCreatingNewUser] = useState(false);
  const [interests, setInterests] = useState();
  const { user, loading, error, signIn, signUp } = useAuth();

  const toggleIsSignUp = () => setIsSignUp(s => !s);

  const handleSubmit = e => {
    e.preventDefault();

    if (isSignUp && !isCreatingNewUser) {
      // toggle interest select
      // TODO: check if email exists
      setIsCreatingNewUser(true);
    } else if (isCreatingNewUser) {
      // complete sign up
      signUp(emailInput, interests, passwordInput);
    } else {
      // sign in
      signIn(emailInput, passwordInput);
      setEmailInput("");
      setPasswordInput("");
    }
  };

  const handleChange = e => {
    const inputVal = e.target.value;

    switch (e.target.name) {
      case "email":
        setEmailInput(inputVal);
        break;
      case "password":
        setPasswordInput(inputVal);
        break;
      default:
        break;
    }
  };

  if (error)
    return <p>Something went wrong. Please refresh the page to try again...</p>;

  if (loading) return <p>Authenticating...</p>;

  if (user) {
    localStorage.setItem("email", user.email);
    return (
      <>
        <Redirect to="/dashboard" />
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="auth_div" hidden={isSignUp && isCreatingNewUser}>
        <label>
          E-mail:
          <input
            className="auth_input"
            name="email"
            value={emailInput}
            onChange={handleChange}
            type="email"
            required
          />
        </label>
        <label>
          Password:
          <input
            className="auth_input"
            name="password"
            value={passwordInput}
            onChange={handleChange}
            type="password"
            required
          />
        </label>
      </div>

      <InterestSelect
        onChange={setInterests}
        hidden={!isSignUp || !isCreatingNewUser}
      />

      <button type="submit">
        {isSignUp
          ? isCreatingNewUser
            ? "Sign up"
            : "Select interests"
          : "Log in"}
      </button>

      {!isCreatingNewUser && (
        <button onClick={toggleIsSignUp} type="button">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
        </button>
      )}
    </form>
  );
};

export default AuthForm;
