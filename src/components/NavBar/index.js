import React from "react";
import { users, suppliers } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavContainer, NavIcon, NavList, NavItems, ATags, NavProfiles, NavProfilesSpan, NavUserPhoto } from "./styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function NavBar(userId) {
  let [user] = users.filter((user) => userId.userId === user._id);
  let iconNav = faMotorcycle;
  if (!user) {
    [user] = suppliers.filter((supplier) => userId.userId === supplier._id);
    iconNav = faTruckPickup;
  }
  return (
    <Router>
      <Nav>
        <NavContainer>
          <NavIcon>
            <Link to="/">
              <FontAwesomeIcon icon={iconNav} />
            </Link>
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
          <NavProfilesSpan>{user.name}</NavProfilesSpan>
          <ATags to="/">
            <NavUserPhoto src={user.photo} alt="profile_photo" />
          </ATags>
        </NavProfiles>
      </Nav>
    </Router>
  );
}
