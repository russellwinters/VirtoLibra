import React from "react";
import styled from "styled-components";
import { highlight, bg } from "../Styles/colors";
import { mainFont } from "../Styles/fonts";
import { useAuth } from "../hooks";

const HeaderStyle = styled.header`
  background-color: ${highlight};
  color: ${bg};
  height: 50px;
  border-radius: 25px;
  margin: auto;
  padding-top: 5px;
  margin-bottom: 10px;
  font-family: ${mainFont};
  display: flex;
  justify-content: space-between;
  & h1 {
    margin-left: 20px;
    color: ${bg};
  }
`;

export default function Header() {
  const { logOut } = useAuth();
  return (
    <HeaderStyle>
      <h1>VirtoLibra</h1>
      <button onClick={logOut}>Logout</button>
    </HeaderStyle>
  );
}
