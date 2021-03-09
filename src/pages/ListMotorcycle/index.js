import React from 'react';
import { suppliers, services, tows } from '../../data';
import { BoxSupplier } from './styles';
import Client from '../../components/Client';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
class ListMotorcycle extends React.Component {
  state = {
    suppliers,
    tows,
    services,
  };

  render() {
    const { suppliers, tows, services } = this.state;
    return (
      <section>
        <NavBar userId={this.props.match.params.id} />
        <BoxSupplier>
          <Button color="primary">Ha pagado XX.XXX COP</Button>
          <Client suppliers={suppliers} tows={tows} services={services} />
          <Button color="success"> Servicio en proceso</Button>
          <Button color="primary">Pedir Grúa</Button>
        </BoxSupplier>
      </section>
    );
  }
}

export default ListMotorcycle;
