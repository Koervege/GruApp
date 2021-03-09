import React from "react";
import { users } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavContainer, NavIcon, NavList, NavItems, ATags, NavProfiles, NavProfilesSpan, NavUserPhoto } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";

export default function NavBar() {
    return (
        <Router>
            <Nav>
                <NavContainer>
                    <NavIcon>
                        <FontAwesomeIcon icon={faMotorcycle}/>
                    </NavIcon>
                    <NavList>
                        <NavItems>
                            <ATags to="/">Historial</ATags>
                        </NavItems>
                        <NavItems>
                            <ATags to="/">Notificaciones</ATags>
                        </NavItems>
                    </NavList>
                </NavContainer>
                <NavProfiles>
                    <NavProfilesSpan>{users[1].name}</NavProfilesSpan>
                    <ATags to="/">
                        <NavUserPhoto src={users[1].photo} alt="profile_photo"/>
                    </ATags>
                </NavProfiles>
            </Nav>
        </Router>
    )
}

