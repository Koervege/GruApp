import React from 'react';
import { users, suppliers } from '../../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './style.css';

export default function NavBar(userId) {
  let [user] = users.filter((user) => userId.userId === user._id);
  let iconNav = faMotorcycle;
  if (!user) {
    [user] = suppliers.filter((supplier) => userId.userId === supplier._id);
    iconNav = faTruckPickup;
  }
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__icon">
          <Link to="/">
            <FontAwesomeIcon icon={iconNav} />
          </Link>
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
        <span>{user.name}</span>
        <a href="#top">
          <img
            className="nav__userPhoto"
            src={user.photo}
            alt="profile_photo"
          />
        </a>
      </div>
    </nav>
  );
}
