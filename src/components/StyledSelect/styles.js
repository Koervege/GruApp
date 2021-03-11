import styled from "styled-components";

export const Select = styled.select`
  padding: 5px;
  border-radius: 15px;
  font-size: 15px;
  width: 75%;
  margin: 0px auto;
  border: 2px solid #e0e0e0;
  outline-color: #1982ea;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const Label = styled.label`
  padding: 5px;
  font-weight: bold;
  font-size: 15px;
  margin-left: 10px;
  color: gray;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  align-items: center;
`;
