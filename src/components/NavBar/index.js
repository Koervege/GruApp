import React from "react";
import { users } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 50px;
    background-color: rgba(82, 161, 227);
    font-size: 1.5em;
    color: #fefefe;
    text-transform: uppercase;
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const NavIcon = styled.div`
    font-size: 70px;
    color: #fefefe;
`
const NavList = styled.ul`
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    text-decoration: none;
`
const NavItems = styled.li`
    padding: 5px 10px;
`

const NavProfiles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NavProfilesSpan = styled.span`
    margin-right: 15px;
`
const ATags = styled.a`
    text-decoration: none;
    color: inherit;
`

const NavUserPhoto = styled.img`
    border-radius: 100%;
    border: 3px solid #fefefe;
    width: 90px;
`


export default function NavBar() {
    return (
        <Nav>
            <NavContainer>
                <NavIcon>
                    <FontAwesomeIcon icon={faMotorcycle}/>
                </NavIcon>
                <NavList>
                    <NavItems>
                        <ATags href="#top">Historial</ATags>
                    </NavItems>
                    <NavItems>
                        <ATags href="#top">Notificaciones</ATags>
                    </NavItems>
                </NavList>
            </NavContainer>
            <NavProfiles>
                <NavProfilesSpan>{users[1].name}</NavProfilesSpan>
                <ATags href="#top">
                    <NavUserPhoto src={users[1].photo} alt="profile_photo"/>
                </ATags>
            </NavProfiles>
        </Nav>
    )
}

