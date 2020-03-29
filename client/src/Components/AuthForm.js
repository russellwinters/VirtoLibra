import React, {useState} from "react";
import {useAuth} from "../hooks";

const AuthForm = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const {user, loading, error, signIn, signUp, logOut} = useAuth();

  const toggleIsSignUp = () => setIsSignUp(s => !s);

  const handleSubmit = e => {
    e.preventDefault();

    isSignUp
      ? signUp(emailInput, passwordInput)
      : signIn(emailInput, passwordInput)

    setEmailInput('');
    setPasswordInput('');
  };

  const handleChange = e => {
    const inputVal = e.target.value;

    switch (e.target.name) {
      case ('email'):
        setEmailInput(inputVal);
        break;
      case ('password'):
        setPasswordInput(inputVal);
        break;
      default:
        break;
    }
  };

  if (error) return (
    <p>Something went wrong. Please refresh the page to try again...</p>
  );

  if (loading) return (<p>Authenticating...</p>);

  if (user) return (
    <>
      <p>Logged in as: {user.email}</p>
      <p>
        Not you?
        <button type="button" onClick={logOut}>Log out</button>
      </p>
    </>
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-mail:
        <input
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
          name="password"
          value={passwordInput}
          onChange={handleChange}
          type="password"
          required
        />
      </label>

      <button type="submit">
        {isSignUp ? 'Sign up' : 'Log in'}
      </button>

      <button onClick={toggleIsSignUp} type="button">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
      </button>
    </form>
  );
};

export default AuthForm;
