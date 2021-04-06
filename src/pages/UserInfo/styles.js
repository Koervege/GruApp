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
  height: 40px;
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
`
export const ImgUser = styled.img`
    border-radius: 50%;
    border: 3px solid #fefefe;
    width: 70px;
		height: 70px;
`