import React from 'react';
import axios from 'axios';
import { BoxSupplier } from '../ListMotorcycle/styles';
import Provider from '../../components/Provider';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
class ListTow extends React.Component {
  state = {
    services: '',
    error: '',
  };

  async componentDidMount() {
    try {
      const { data: { services } } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/services',
      });

      this.setState({
        services,
      });
    } catch (error) {
      this.setState({
        error,
      });
      alert(error);
    }
  }
  render() {
    const { services } = this.state;
    return (
      <section>
        <NavBar userId={this.props.match.params.id} />
        <BoxSupplier>
          <Button color="primary">Ha ganado XX.XXX COP</Button>
          <Provider services={services} />
          <Button color="success">Servicio en proceso</Button>
        </BoxSupplier>
      </section>
    );
  }
}

export default ListTow;
