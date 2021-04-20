import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Menu = styled.section` 
  position: absolute;
  top: 105px;
  width: 170px;
  transform: translateX(-45%);
  background-color: #fefefe;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.16);
  -moz-box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.16);
  box-shadow: 10px 10px 21px 0px rgba(0,0,0,0.16);
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
`;

export const MenuItem = styled(Link)`
  height: 40px;
  display: flex;
  align-items: center;
  transition: background-color 0.4s;
  padding: 0.4rem 1rem;
  text-decoration: none;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2980B9;
  font-weight: 500;
  border-bottom: 2px solid #2980B9;
    &:hover {
      cursor: pointer;
      background-color: #2980B9;
      color: #fefefe;
    }
    &:last-child {
      border-bottom: none;
    }
  `

