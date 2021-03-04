import React from 'react';
//import { users, suppliers, motorcycles, services, tows } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as StarOnly } from '@fortawesome/free-regular-svg-icons';
import './styles.css';

class ListMotorcycle extends React.Component {
  /*state = {
    users,
    motorcycles,
    suppliers,
    tows,
    services,
  }; */

  render() {
    //const { users, motorcycles, suppliers, tows, services } = this.state;
    return (
      <div>
        <div className="star">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="star">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="star">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="star">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="star">
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
    );
  }
}

export default ListMotorcycle;
