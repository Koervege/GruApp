import React from 'react';
import axios from 'axios';
import { BoxSupplier } from './styles';
import Client from '../../components/Client';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
class ListMotorcycle extends React.Component {
  state = {
    tows: '',
    userID: '',
    error:'',
  };

  async componentDidMount() {
    try {
      const token = localStorage.getItem('token');

      const { data: {tows, userID} } = await axios({
        method: 'GET',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/tows',
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      this.setState({
        tows,
        userID,
      });
      
    } catch (error) {
      this.setState({
        error,
      });
      localStorage.removeItem('token');
      this.props.history.push('/login');
      alert(error);
    }
  }
  
  render() {
    const { tows, userID } = this.state;
    return (
      <section>
        <NavBar userID={userID}/>
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
