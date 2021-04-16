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
  color: rgba(82, 161, 227);
  border-bottom: 1px solid rgba(82, 161, 227);
    &:hover {
      cursor: pointer;
      background-color: rgba(82, 161, 227);
      color: #fefefe;
    }
    &:last-child {
      border-bottom: none;
    }
  `

