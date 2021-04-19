import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`

  text-decoration: none;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 10px;
  outline: none;
  font-size: 20px;
  height: 41.5px;
  min-width: 100px;
  max-width: auto;
  color: white;
  border-style: none;
  background: red;

  &:hover {

    cursor: pointer;
    background-color: #f8ce0b;
    color: black;

  }

`
export const StyledFieldset = styled.fieldset`

  border-radius: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: column wrap;
  border-color: #2980B9;
  border-width: 3px;
  border-style:solid;

`

export const RadioFieldset =  styled.fieldset` 

  border: 0px;
  margin-left: auto;
  margin-right: auto;
  width: 200px;
  display: flex;
  align-items: center;
  margin-left: 60px;

`

export const RadioLabel = styled.label `

  color: #2980B9;
  font-weight: 500;
  font-size: 16px;
  align-self: center;
  justify-self: center;

`
export const RadioInput = styled.input `

  appearance: none;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  border: 2px solid #2980B9;
  transition: 0.2s all linear;
  margin-right: 5px;
  top: 4px;
  outline: none;

  &:checked {
    border: 6px solid #1982ea;
  }
`

export const Legend = styled.legend `

  margin: 0 5px;
  padding: 0 7px;

`

