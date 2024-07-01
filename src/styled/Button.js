import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  color: white;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: aliceblue;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;



export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color:black;
&:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
    
  }
`;
