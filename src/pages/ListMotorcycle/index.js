import React from 'react';
import { suppliers, services, tows } from '../../data';
import './styles.css';
import Client from '../../components/Client';
class ListMotorcycle extends React.Component {
  state = {
    suppliers,
    tows,
    services,
  };

  render() {
    const { suppliers, tows, services } = this.state;
    return (
      <div className="boxSupplier">
        <button>Ha pagado XX.XXX COP</button>
        <Client suppliers={suppliers} tows={tows} services={services} />
        <button>Pedir Grúa</button>
      </div>
    );
  }
}

export default ListMotorcycle;
