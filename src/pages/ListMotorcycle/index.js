import React from 'react';
import axios from 'axios';
import { BoxSupplier } from './styles';
import Client from '../../components/Client';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
class ListMotorcycle extends React.Component {
  state = {
    services: '',
    error:'',
  };

  async componentDidMount() {
    try {

      const { data: {services} } = await axios({
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
          <Button color="primary">Ha pagado XX.XXX COP</Button>
          <Client services={services} />
          <Button color="success"> Servicio en proceso</Button>
          <Button color="primary">Pedir Grúa</Button>
        </BoxSupplier>
      </section>
    );
  }
}

export default ListMotorcycle;
