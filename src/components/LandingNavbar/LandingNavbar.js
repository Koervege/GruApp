import React from "react";
import { users } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

class LandingNavbar extends React.Component {

    render() {

        return (
            <nav className="nav">
                <div className="nav__container">
                    <div className="nav__icon">
                        <FontAwesomeIcon icon={faMotorcycle}/>
                        <FontAwesomeIcon icon={faTruckPickup}/>
                    </div>
                </div>
                <div className="nav__profile">
                    <a href="#top">
                        <pre className="nav__userPhoto">Login</pre>
                    </a>
                </div>
            </nav>
        )
    }
    
}
;

export default LandingNavbar;