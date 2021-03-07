import React from 'react';
import { suppliers, services, tows } from '../../data';
import { BoxSupplier } from './styles';
import Client from '../../components/Client';
import Button from '../../components/Button';
class ListMotorcycle extends React.Component {
  state = {
    suppliers,
    tows,
    services,
  };

  render() {
    const { suppliers, tows, services } = this.state;
    return (
      <BoxSupplier>
        <Button color="primary">Ha pagado XX.XXX COP</Button>
        <Client suppliers={suppliers} tows={tows} services={services} />
        <Button color="success">Pedir Grúa</Button>
      </BoxSupplier>
    );
  }
}

export default ListMotorcycle;
