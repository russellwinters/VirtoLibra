import React from "react";
import { highlight } from "../Styles/colors";
import styled from "styled-components";
import Button from "./Button";

const GenreListStyle = styled.div`
  width: 25vw;
  height: 80vh;
  border-radius: 25px;
  background-color: ${highlight};
  text-align: center;
  padding: 10px;
`;
export default function GenreList() {
  return (
    <GenreListStyle>
      <Button>
        <p>Fiction</p>
      </Button>
      <Button>
        <p>Non-Fiction</p>
      </Button>
    </GenreListStyle>
  );
}
