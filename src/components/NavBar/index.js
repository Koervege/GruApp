import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavContainer, NavIcon, NavList, NavItems, ATags, NavProfiles, NavProfilesSpan, NavUserPhoto } from "./styles";

export default function NavBar(userId) {
  return (
    <Nav>
      <NavContainer>
        <NavIcon>
          <ATags to="/">
            <FontAwesomeIcon icon={faMotorcycle} />
            <FontAwesomeIcon icon={faTruckPickup} />
          </ATags>
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
        <NavProfilesSpan>Pepito Perez</NavProfilesSpan>
        <ATags to="/">
          <NavUserPhoto
            src="https://www.moriwoki.com/wp-content/uploads/2020/04/Los-mejores-cascos-de-moto-para-mujer-integral.jpg"
            alt="profile_photo"
          />
        </ATags>
      </NavProfiles>
    </Nav>
  );
}
