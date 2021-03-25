import React from 'react';
import axios from 'axios';
import { BoxSupplier } from './styles';
import Client from '../../components/Client';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
class ListMotorcycle extends React.Component {
  state = {
    tows: '',
    error:'',
  };

  async componentDidMount() {
    try {

      const { data: {tows} } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/tows',
      });

      this.setState({
        tows,
      });
      
    } catch (error) {
      this.setState({
        error,
      });
      alert(error);
    }
  }
  
  render() {
    const { tows } = this.state;
    return (
      <section>
        <NavBar />
        <BoxSupplier>
          <Button color="primary">Ha pagado XX.XXX COP</Button>
          <Client tows={tows} />
          <Button color="success"> Servicio en proceso</Button>
          <Button color="primary">Pedir Grúa</Button>
        </BoxSupplier>
      </section>
    );
  }
}

export default ListMotorcycle;
