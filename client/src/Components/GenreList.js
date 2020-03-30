import React from "react";
import { highlight } from "../Styles/colors";
import styled from "styled-components";
import GetGenreList from "../hooks/GetGenreList";
import Button from "./Button";
import { Link } from "react-router-dom";

const GenreListStyle = styled.div`
  width: 25vw;
  height: 80vh;
  border-radius: 25px;
`;

export default function GenreList() {
  const { data, error, loading } = GetGenreList();
  if (error) {
    return <div>Oops</div>;
  }

  if (loading) {
    return <div>...loading</div>;
  }

  if (data !== null) {
    console.log("inside GenreList", data);
    return (
      <GenreListStyle>
        {data.map(item => (
          <Link to={`/dashboard/${item.list_name_encoded}`} key={item.list_id}>
            <Button> {item.list_name}</Button>
          </Link>
        ))}
      </GenreListStyle>
    );
  }

  return <h1>Loading</h1>;
}
