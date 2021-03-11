import React from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { StyledSelect, Select } from '../../components/StyledSelect/index';
import { users, suppliers } from '../../data';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {ATags} from '../../components/NavBar/styles'

const StyledLink = styled(Link)`
	text-decoration: none;
	display:flex;
	justify-content: center;
	align-items: center;
  border-radius: 5px;
  margin: 10px;
  outline: none;
  font-size: 20px;
  height: 40px;
  min-width: 100px;
  max-width: auto;
  color: white;
  border-style: none;
  background: red;

  &:hover {
    cursor: pointer;
    background-color: #f8ce0b;
    color: black;
  }
`
class UserInfo extends React.Component {
  state = {
    name: '',
    lastName: '',
    phoneNum:'',
    brand:'',
    cc:'',
    capacity:'',
    plateNum:'',
    type:'',
    photo: '',
    vehiPhoto: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  searchUser = (event) => {
    event.preventDefault();
  };

  render() {
    const { name, lastName, phoneNum, plateNum, photo, vehiPhoto, brand } = this.state;

    return (
      <Frame>
        <Container>
          <Img src={logo} radius="100" width="100" height="100" alt="logo" />
        </Container>
        <Container>
          
        </Container>
        <form onSubmit={this.searchUser}>
        <fieldset>
          <legend>Usuario</legend>
          <StyledInput
            value={name}
            name="name"
            onChange={this.handleChange}
            children="Nombre"
            type="text"
          />
          <StyledInput
            value={lastName}
            name="lastName"
            onChange={this.handleChange}
            children="Apellido"
            type="text"
          />
          <StyledInput
            value={phoneNum}
            name="phoneNum"
            onChange={this.handleChange}
            children="Telefono"
            type="tel"
          />
          <StyledInput
            value={photo}
            name="photo"
            onChange={this.handleChange}
            children="Foto perfil"
            type="text"
          />
        </fieldset>
        <fieldset>
          <legend>Grúa / Moto</legend>
          <Select
            /* value={brand}
            id="brand"
            name="brand"
            onChange={this.handleChange}
            labelChildren="Marca:" */
          > 
            <option value="Honda">Honda</option> 
          </Select>

          <label forHtml="brand">Marca:</label> 
          <select name="brand" id="brand"> 
            <option value="Honda">Honda</option> 
            <option value="Kawasaki">Kawasaki</option> 
            <option value="Auteco">Auteco</option> 
          </select> 
          <label forHtml="cc">Cilindraje:</label> 
          <select name="cc" id="cc"> 
            <option value="50cc - 100cc">50cc - 100cc</option> 
            <option value="100cc - 200cc">100cc - 200cc</option> 
            <option value="200cc - 300cc">200cc - 300cc</option> 
            <option value="Más de 300cc">Más de 300cc</option> 
          </select>
          <StyledInput
            value={plateNum}
            name="plateNum"
            onChange={this.handleChange}
            children="Placa"
            type="text"
          />
          <label forHtml="type">Tipo:</label> 
          <select name="type" id="type"> 
            <option value="moto">Moto</option> 
            <option value="cuatrimoto">Cuatrimoto</option> 
          </select>
          <StyledInput
            value={vehiPhoto}
            name="vehiPhoto"
            onChange={this.handleChange}
            children="Foto vehículo "
            type="text"
          />  
        </fieldset>
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