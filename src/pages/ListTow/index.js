import React from 'react';
import { services, motorcycles, users } from '../../data';
import { BoxSupplier } from '../ListMotorcycle/styles';
import Provider from '../../components/Provider';
import Button from '../../components/Button';
class ListTow extends React.Component {
  state = {
    services,
    motorcycles,
    users,
  };

  render() {
    const { services, motorcycles, users } = this.state;
    return (
      <BoxSupplier>
        <Button color="primary">Ha ganado XX.XXX COP</Button>
        <Provider services={services} motorcycles={motorcycles} users={users} />
        <Button color="success">Servicio en proceso</Button>
      </BoxSupplier>
    );
  }
}

export default ListTow;
