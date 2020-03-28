import { highlight, bg, dark } from "../Styles/colors";
import styled from "styled-components";

const Button = styled.button`
  width: 20vw;
  background-color: ${highlight};
  color: ${bg};
  font-size: 12px;
  font-weight: bold;
  height: 50px;
  border-radius: 25px;
  padding: 5px;
  margin-bottom: 10px;
  border: 0;
  &:hover {
    border-style: solid;
    border-width: 5px;
    border-color: ${dark};
  }
  &:active {
    background-color: ${bg};
    color: ${highlight};
  }
  &:focus {
    outline: 0;
  }
`;
export default Button;
