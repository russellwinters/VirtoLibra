import React, { useState, useEffect } from "react";
import { GetGenreList } from "../hooks";

export const InterestSelect = ({onChange, ...props}) => {
  const { data, error, loading } = GetGenreList();
  const [interests, setInterests] = useState([]);

  const handleChange = e => {
    const { value, checked } = e.target;

    if (checked) {
      setInterests(s => [...s, value]);
    } else {
      const interestsCopy = [...interests];
      const idx = interestsCopy.indexOf(String(value));
      interestsCopy.splice(idx, 1);
      setInterests(interestsCopy);
    }
  };

  useEffect(() => {
    onChange(interests);
  }, [interests, onChange]);

  if (loading) return (<p>loading...</p>);

  if (error) return (
    <p>Something went wrong. Please reload the page to try again.</p>
  );

  return (
    <fieldset {...props}>
      <legend>Select interests:</legend>
      {data && data.map(({list_id, list_name}) => (
        <label key={list_id}>
          <input
            type="checkbox"
            checked={interests.includes(String(list_id))}
            value={list_id}
            name={list_name}
            onChange={handleChange}
          />
          {list_name}
        </label>
      ))}
    </fieldset>
  );
};
