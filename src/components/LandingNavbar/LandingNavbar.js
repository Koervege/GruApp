import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import {
  LandNavContainer,
  LandNavIcons,
  LandNavLogin,
  LandNavLoginCont,
  LandNavbar,
} from './styles';

class LandingNavbar extends React.Component {
  render() {
    return (
      <LandNavbar>
        <LandNavContainer>
          <LandNavIcons>
            <FontAwesomeIcon icon={faMotorcycle} />
            <FontAwesomeIcon icon={faTruckPickup} />
          </LandNavIcons>
        </LandNavContainer>
        <LandNavLoginCont>
        <LandNavLogin to="/login">Login</LandNavLogin>
        </LandNavLoginCont>
      </LandNavbar>
    );
  }
}
export default LandingNavbar;