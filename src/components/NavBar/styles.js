import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 50px;
    background-color: rgba(82, 161, 227);
    font-size: 1.5em;
    color: #fefefe;
    text-transform: uppercase;
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
`
export const NavList = styled.ul`
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    text-decoration: none;
`
export const NavItems = styled.li`
    padding: 5px 10px;
`

export const NavProfiles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavProfilesSpan = styled.span`
    margin-right: 15px;
`
export const ATags = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const NavUserPhoto = styled.img`
    border-radius: 50%;
    border: 3px solid #fefefe;
    width: 70px;
		height: 70px;
`
