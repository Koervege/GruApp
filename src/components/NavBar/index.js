import React from "react";
import { users, suppliers } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavContainer, NavIcon, NavList, NavItems, ATags, NavProfiles, NavProfilesSpan, NavUserPhoto } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";

export default function NavBar({user}) {
    return (
        <Router>
            <Nav>
                <NavContainer>
                    <NavIcon>
                        <FontAwesomeIcon icon={user ? faMotorcycle : faTruckPickup}/>
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
                    <NavProfilesSpan>{user ? users[1].name : suppliers[1].name}</NavProfilesSpan>
                    <ATags to="/">
                        <NavUserPhoto src={user ? users[1].photo : suppliers[1].photo} alt="profile_photo"/>
                    </ATags>
                </NavProfiles>
            </Nav>
        </Router>
    )
}

