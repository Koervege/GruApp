import styled from "styled-components";

export const Select = styled.select`
  flex: 1 1 auto;
  background-color: #fefefe;
  border-radius: 15px;
  border: none;
  box-sizing: border-box;
  padding: 2px 10px;
  max-width: 233px;
  height: 30px;
  margin: 0px auto;
  outline: none;
  font-size: 16px;
  color: #444;
  font-weight: bold;
  letter-spacing: 0.3px;
  &:valid {
    background-color: #e8f0fe;  
    }
  &:focus {
    border: 1px solid #2980B9;  
  }
  `;

export const Label = styled.label`
  width: 70px;
  padding: 5px 0;
  font-weight: 500;
  font-size: 16px;
  margin-right: 18px;
  color: #2980b9;
`;


