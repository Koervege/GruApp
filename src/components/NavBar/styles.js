import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 50px;
  background: linear-gradient(120deg, #2980B9 5%, #0D476E 55%, #52BAFF 100%);
  font-size: 1.5em;
  color: #fefefe;
  text-transform: capitalize;
    @media (max-width: 768px) {
      padding: 12px 20px;
      justify-content: center;
    } 
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const NavIcon = styled.div`
  font-size: 70px;
  color: #fefefe;
    @media (max-width: 768px) {
      font-size: 40px;
      padding-right: 25px;
    } 
`
export const NavList = styled.ul`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  text-decoration: none;
    @media (max-width: 768px) {
      display: none;
    }
`
export const NavItems = styled.li`
  padding: 5px 10px;
`

export const NavProfiles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavProfilesSpan = styled.span`
  margin-right: 15px;
    @media (max-width: 768px) {
      margin-right: 2px;
      width: 150px;
      text-align: center;
    }
`

const tagFontWeight = tagType => {
  switch (tagType) {
    case "bold":
      return "bold";  
    default:
      return "normal";
  }
};

export const ATags = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: ${({ tagType }) => tagFontWeight(tagType)};
`;

export const HistoryButton = styled.button`
  text-decoration: none;
  color: inherit;
  font-size: 1.1em;
  background: inherit;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`

export const NavUserPhoto = styled.img`
  border-radius: 50%;
  border: 3px solid #fefefe;
  width: 70px;
  height: 70px;
  @media (max-width: 768px) {
    border: 1px solid #fefefe;
    width: 50px;
    height: 50px;
  }
`;

export const ImgBtn = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    padding-left: 30px;
  }
`;

export const Image = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  @media (max-width: 576px) {
    height: 50px;
    width: 50px;
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
  width: 200px;
  height: auto;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  @media (max-width: 576px) {
    font-size: 18px;
    width: 120px;
  }
`;