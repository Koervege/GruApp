import React from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { Select, Label } from '../../components/StyledSelect/index';
import { StyledLink, StyledFieldset } from "./styles";


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

  sendInfo = (event) => {
    event.preventDefault();
  };

  render() {
    const { name, lastName, phoneNum, plateNum, photo, vehiPhoto, brand, type, cc } = this.state;

    return (
      <Frame>
        <Container>
          <Img src={logo} radius="100" width="100" height="100" alt="logo" />
        </Container>
        <Container>
          
        </Container>
        <form onSubmit={this.sendInfo}>
        <StyledFieldset>
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
        </StyledFieldset>
        <StyledFieldset>
          <legend>Grúa / Moto</legend>
          <Container>
            <div>
              <Label htmlFor="brand">Marca</Label>
              <Select
                value={brand}
                id="brand"
                name="brand"
                onChange={this.handleChange}
                type="text"
              > 
                <option value="Honda">Honda</option>
                <option value="Kawasaki">Kawasaki</option> 
                <option value="Auteco">Auteco</option>  
              </Select>
            </div>
          </Container>
          <Container>
            <div>
              <Label htmlFor="cc">Cilindraje</Label>
              <Select
                value={cc}
                id="cc"
                name="cc"
                onChange={this.handleChange}
                type="text"
              > 
                <option value="50cc - 100cc">50cc - 100cc</option> 
                <option value="100cc - 200cc">100cc - 200cc</option> 
                <option value="200cc - 300cc">200cc - 300cc</option> 
                <option value="Más de 300cc">Más de 300cc</option> 
              </Select>
            </div>
          </Container>
          <StyledInput
            value={plateNum}
            name="plateNum"
            onChange={this.handleChange}
            children="Placa"
            type="text"
          />
          <Container>
            <div>
              <Label htmlFor="type">Tipo</Label>
              <Select
                value={type}
                id="type"
                name="type"
                onChange={this.handleChange}
                type="text"
              > 
                <option value="moto">Moto</option> 
                <option value="cuatrimoto">Cuatrimoto</option> 
              </Select>
            </div>
          </Container>
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