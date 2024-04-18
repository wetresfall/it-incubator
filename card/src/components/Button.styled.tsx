import styled from "styled-components";

export const StyledButton = styled.button`
  //padding: 5px 10px 5px 10px;
  width: 86px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(78, 113, 254);
  border-radius: 5px;
  cursor: pointer;
  color: rgb(78, 113, 254);
  font-size: 10px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
`

export const StyledButtonActive = styled(StyledButton)`
  color: rgb(255, 255, 255);
  background: rgb(78, 113, 254);
`