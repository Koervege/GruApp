import React from 'react';
import { services, motorcycles, users } from '../../data';
import './styles.css';
import Provider from '../../components/Provider';
class ListTow extends React.Component {
  state = {
    services,
    motorcycles,
    users,
  };

  render() {
    const { services, motorcycles, users } = this.state;
    return (
      <div className="boxService">
        <button>Ha ganado XX.XXX COP</button>
        <Provider services={services} motorcycles={motorcycles} users={users} />
        <button>Servicio en proceso</button>
      </div>
    );
  }
}

export default ListTow;
