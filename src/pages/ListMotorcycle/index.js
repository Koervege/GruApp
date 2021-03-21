import React from 'react';
import axios from 'axios';
import { BoxSupplier } from './styles';
import Client from '../../components/Client';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
class ListMotorcycle extends React.Component {
  state = {
    suppliers: '',
    tows: '',
    services: '',
    error:'',
  };

  async componentDidMount() {
    try {
      const { data: { suppliers },} = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/suppliers',
      });

      const { data: {tows} } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/tows',
      });

      
      const { data: {services} } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/services',
      });

      this.setState({
        suppliers,
        tows,
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
