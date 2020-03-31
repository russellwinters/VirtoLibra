import React, { useState } from "react";
import { useAuth, useUserInterests } from "../hooks";
import InterestSelect from "./InterestSelect";

const UpdateInterestsForm = () => {
  const [interests, setInterests] = useState();
  const {user} = useAuth();
  const {updateUserData} = useUserInterests();
  const [error, setError] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    updateUserData(user.email, interests)
      .then(() => {
        // redirect
      })
      .catch(setError);
  };

  if (error) return (
    <p>Something went wrong. Please refresh the page and try again.</p>
  )

  return (
    <form onSubmit={handleSubmit}>
      <InterestSelect onChange={setInterests} />
      <button type="submit">Update interests</button>
    </form>
  );
};

export default UpdateInterestsForm;
