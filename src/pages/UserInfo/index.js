import React from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import MotoInfo from '../../components/MotoInfo';
import TowInfo from '../../components/TowInfo';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { StyledLink, StyledFieldset } from "./styles";
import axios from 'axios';


class UserInfo extends React.Component {

  state = {
    name: '',
    phoneNum:'',
    brand:'',
    cc:'',
    capacity:'',
    plateNum:'',
    type:'',
    weight:'',
    photo: '',
    vehiPhoto: '',
    vehicleType:'',
    edit: false,
  };

  async componentDidMount() {
    const userType = localStorage.getItem('userType');
    const email = localStorage.getItem('email');
    const { data } = await axios({
      method: 'GET',
      baseURL:process.env.REACT_APP_SERVER_URL,
      url: `/${userType}s?email=${email}`
    })

    if (userType === 'user') {
      const { name, phoneNum } = data.users[0];
      this.setState({ vehicleType: 'Moto', name, phoneNum })
    } else {
      const { name, phoneNum } = data.suppliers[0];
      this.setState({ vehicleType: 'Grúa', name, phoneNum })
    }
  }

  eraseUser = async(event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const userType = localStorage.getItem('userType');

    await axios({
      method: 'DELETE',
      baseURL:process.env.REACT_APP_SERVER_URL,
      url: `/${userType}s`,
      headers: {
        Authorization: `Bearer ${token}`,
      } 
    })
    this.setState({
      name: '',
      phoneNum:'',
    })
    this.props.history.push(`/login/`);
    localStorage.clear();
  };


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleChangePlateNum = (param) => {
    this.setState({
      plateNum: param
    })
  }

  handleChangeCapacity = (param) => {
    this.setState({
      capacity: param
    })
  }

  handleChangeBrand = (param) => {
    this.setState({
      brand: param
    })
  }

  handleChangeCyl = (param) => {
    this.setState({
      cc: param
    })
  }

  handleChangeType = (param) => {
    this.setState({
      type: param
    })
  }

  handleChangeWeight = (param) => {
    this.setState({
      weight: param
    })
  }

  handleEdit = (e) => {
    this.setState({
      edit: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    })
  }

  sendInfo = async(event) => {
    event.preventDefault();
    const userType = localStorage.getItem('userType');
    const token = localStorage.getItem('token');
    if (this.state.edit) {
      const { data } = await axios({
        method: 'PUT',
        baseURL:process.env.REACT_APP_SERVER_URL,
        url: `/${userType}s`,
        data: {
          name: this.state.name,
          phoneNum: this.state.phoneNum,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        } 
      })
      alert(data.message)
    }
    const { data } = await axios({
      method: 'POST',
      baseURL:process.env.REACT_APP_SERVER_URL,
      url: userType === 'user' ? '/motorcycles/create' : '/tows',
      data: userType === 'user' ? 
        {
          brand: this.state.brand,
          cc: this.state.cc,
          type: this.state.type,
          plateNum: this.state.plateNum,
          weight: this.state.weight,
        }
        : {
          brand: this.state.brand,
          capacity: this.state.capacity,
          plateNum: this.state.plateNum,
          status: true,
        },
      headers: {
        Authorization: `Bearer ${token}`,
      } 
    })
  };

  render() {
    const { name, phoneNum, photo, vehiPhoto, vehicleType, edit } = this.state;

    return (
      <Frame>
        <Container>
          <Img src={logo} radius="100" width="100" height="100" alt="logo" />
        </Container>

        <form onSubmit={this.sendInfo}>
        <StyledInput
            name="edit"
            onChange={this.handleEdit}
            children="Editar"
            type="checkbox"
            checked={edit}
          />
        <StyledFieldset>
          <legend>Usuario</legend>
          <StyledInput
            value={name}
            name="name"
            onChange={this.handleChange}
            children="Nombre"
            type="text"
            disabled={!edit}
          />
          <Button type="button" color="danger" onClick={this.eraseUser}>Borrar Usuario</Button>
          <StyledInput
            value={phoneNum}
            name="phoneNum"
            onChange={this.handleChange}
            children="Telefono"
            type="tel"
            disabled={!edit}
          />
          <StyledInput
            value={photo}
            name="photo"
            onChange={this.handleChange}
            children="Foto perfil"
            type="text"
            disabled={!edit}
          />
        </StyledFieldset>
        <StyledFieldset>
          <legend>{vehicleType}</legend>
          {
            vehicleType === 'Moto'? 
              (
                <MotoInfo 
                  handleChangeBrand={this.handleChangeBrand}
                  handleChangeCyl={this.handleChangeCyl} 
                  handleChangeType={this.handleChangeType} 
                  handleChangePlateNum={this.handleChangePlateNum} 
                  handleChangeWeight={this.handleChangeWeight}
                />
              ) 
              : 
              (
                <TowInfo 
                handleChangeBrand={this.handleChangeBrand}
                handleChangeCapacity={this.handleChangeCapacity} 
                handleChangePlateNum={this.handleChangePlateNum} 
                />
              )
          }
          <StyledInput
            value={vehiPhoto}
            name="vehiPhoto"
            onChange={this.handleChange}
            children="Foto vehículo "
            type="text"
          />  
        </StyledFieldset>
          <Container>
            <Button type="submit" color="primary">
              Aceptar
            </Button>
            <StyledLink to="/">Cancelar</StyledLink>
          </Container>
        </form>
      </Frame>
    );
  }
}

export default UserInfo;