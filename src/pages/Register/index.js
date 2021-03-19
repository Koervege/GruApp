import React from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { StyledLink, StyledFieldset, RadioInput, RadioLabel, RadioFieldset} from "./styles";


class Register extends React.Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    phoneNum: '',
    password: '',
    passwordConfirm: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { name, lastName, phoneNum, email, password, passwordConfirm } = this.state;

     return (
      <Frame>
        <Container>
        <Img src={logo} radius="150" width="150" height="150" alt="logo" />
        </Container>

        <form onSubmit={this.handleSubmit}>
          <StyledFieldset>
            <legend>Regístrate</legend>
            <StyledInput
              value={name}
              name="name"
              id="name"
              onChange={this.handleChange}
              children="Nombre"
              type="text"
            />
            <StyledInput
              value={lastName}
              name="lastName"
              id="lastName"
              onChange={this.handleChange}
              children="Apellido"
              type="text"
            />
            <StyledInput
              value={email}
              name="email"
              id="email"
              onChange={this.handleChange}
              children="E - mail"
              type="text"
            />
            <StyledInput
              value={phoneNum}
              name="phoneNum"
              id="phoneNum"
              onChange={this.handleChange}
              children="Teléfono"
              type="tel"
            />
            <StyledInput
              value={password}
              name="password"
              id="password"
              onChange={this.handleChange}
              children="Contraseña"
              type="password"
            />
            <StyledInput
              value={passwordConfirm}
              name="passwordConfirm"
              id="passwordConfirm"
              onChange={this.handleChange}
              children="Confírmala"
              type="password"
            /> 

            <Container>
              <RadioLabel htmlFor="isBike" className="radioLabel">
                Moto
              </RadioLabel>
              <RadioInput
                type="radio"
                name="isBike"
                id="isBike"
                value="isBike"
                onChange={this.handleChange}
              />

              <RadioLabel htmlFor="isTow" className="radioLabel">
                Grua
              </RadioLabel>
              <RadioInput
                type="radio"
                name="isBike"
                id="isTow"
                value="isTow"
                onChange={this.handleChange}
              />
            </Container>
          </StyledFieldset>
        </form>

        <RadioFieldset className="registerCheck">
            
          </RadioFieldset>

        <Container>
          <Button type="submit" color="primary">
            Aceptar
          </Button>
          <StyledLink to="/">Cancelar</StyledLink>
        </Container>
      </Frame>
     )
    }
  }

  export default Register
