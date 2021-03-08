import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { LandNavA, LandNavContainer, LandNavIcons, LandNavLogin, LandNavLoginCont, LandNavbar} from './styles'


class LandingNavbar extends React.Component {

    render() {

        return (
            <LandNavbar>
                <LandNavContainer>
                    <LandNavIcons>
                        <FontAwesomeIcon icon={faMotorcycle}/>
                        <FontAwesomeIcon icon={faTruckPickup}/>
                    </LandNavIcons>
                </LandNavContainer>
                <LandNavLoginCont>
                    <LandNavA>
                        <LandNavLogin>Login</LandNavLogin>
                    </LandNavA>
                </LandNavLoginCont>
            </LandNavbar>
        )
    }
    
}
;

export default LandingNavbar;