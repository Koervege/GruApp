import React from "react";
import { users } from "../../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import './style.css';

export default function NavBar() {
    return (
        <nav className="nav">
            <div className="nav__container">
                <div className="nav__icon">
                    <FontAwesomeIcon icon={faMotorcycle} size="3x"/>
                </div>
                <ul className="nav__list">
                    <li className="nav__items">
                        <a href="#top">Historial</a>
                    </li>
                    <li className="nav__items">
                        <a href="#top">Notificaciones</a>
                    </li>
                </ul>
            </div>
            <div className="nav__profile">
                <span>{users[1].name}</span>
                <a href="#top">
                    <img className="nav__userPhoto" src={users[1].photo} alt="profile_photo"/>
                </a>
            </div>
        </nav>
    )
}

