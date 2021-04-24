import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LandNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 50px;
  background: linear-gradient(120deg, #2980B9 5%, #0D476E 55%, #52BAFF 100%);
  font-size: 1.3em;
  color: #fefefe;
  position: fixed;
  width: 95%;
    @media (max-width: 768px) {
      padding: 12px 20px;
    }
`;

export const LandNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  border-radius: 50%;
  height: 70px;
  width: 70px;
`;

export const LandNavIcons = styled.div`
  height: 70px;
  color: #fefefe;
    @media (max-width: 768px) {
      height: 50px;
    } 
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
  width: 150px;
  height: auto;
  margin: 0 25px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
