import React from "react";
import styled from "styled-components";
import { highlight, bg, dark } from "../Styles/colors";

import { useAuth } from "../hooks";

const HeaderStyle = styled.header`
  background-color: ${highlight};
  color: ${bg};
  height: 55px;
  border-radius: 25px;
  margin: auto;
  padding-top: 5px;
  margin-bottom: 10px;
  font-family: mainFont;
  display: flex;
  justify-content: space-between;

  & h1 {
    margin-left: 30px;
    color: ${bg};
  }
  & button {
    margin-top: auto;
    margin-bottom: auto;
    background-color: ${highlight};
    border-radius: 20px;
    width: 60px;
    height: 30px;
    margin-right: 25px;
    color: ${bg};
    font-size: 14px;
    outline: none;
    border: none;
    &:hover {
      background-color: ${bg};
      color: ${highlight};
    }
    &:active {
      border-style: solid;
      border-width: 5px;
      border-color: ${dark};
    }
    &:focus {
      outline: 0;
    }
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
