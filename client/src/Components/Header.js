import React from "react";
import styled from "styled-components";
import { highlight, bg, dark } from "../Styles/colors";
import logo from "../assets/logo.svg";
import Button from "./Button";

import { useAuth } from "../hooks";

const HeaderStyle = styled.header`
  color: ${bg};

  border-radius: 25px;
  margin: auto;
  padding-top: 5px;
  margin-bottom: 10px;
  font-family: mainFont;
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
`;
const ImgDiv = styled.div`
  width: 200px;
  height: auto;
`;
export default function Header() {
  const { logOut } = useAuth();
  return (
    <HeaderStyle>
      <ImgDiv>
        <img alt="logo" src={logo}></img>
      </ImgDiv>
      <Button onClick={logOut}>Logout</Button>
    </HeaderStyle>
  );
}
