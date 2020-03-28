import { bg } from "../Styles/colors";
import styled from "styled-components";
import React from "react";

const ButtonStyle = styled.button`
  width: 20vw;
  background-color: ${bg};
  height: 50px;
  border-radius: 25px;
  padding: 5px;
  margin-bottom: 10px;
`;
export default function Button() {
  return <ButtonStyle></ButtonStyle>;
}
