import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 50px;
  background-color: rgba(82, 161, 227);
  font-size: 1.5em;
  color: #fefefe;
  text-transform: uppercase;
  position: fixed;
  width: 95%;
`;

export const LandNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LandNavIcons = styled.div`
  font-size: 70px;
  color: #fefefe;
`;

export const LandNavLoginCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LandNavLogin = styled(Link)`
	text-decoration: none;
	color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 100%;
  border: 3px solid #fefefe;
  width: 100px;
  height: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
