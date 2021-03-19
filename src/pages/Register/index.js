import React from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import axios from 'axios'
import { StyledInput, Container } from '../../components/StyledInput/index';
import { StyledLink, StyledFieldset, RadioInput, RadioLabel} from "./styles";

class Register extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNum: '',
    password: '',
    passwordConfirm: '',
    userType: '',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phoneNum, password, userType } = this.state

    axios({
      method: 'POST',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: `/${userType}s/signup`,
      data: {
        name: firstName+lastName,
        email,
        phoneNum,
        password,
      }
    })
      .then(({ data }) => {
        localStorage.setItem('token', data.token)
        this.props.history.push(`/userinfo/`);
      })
      .catch(err => {
        alert('Ocurrió un error. Inténtalo de nuevo más tarde.')
      })
      
  };

  render() {
    const { firstName, lastName, phoneNum, email, password, passwordConfirm } = this.state;

     return (
      <Frame>
        <Container>
        <Img src={logo} radius="150" width="150" height="150" alt="logo" />
        </Container>

        <form onSubmit={this.handleSubmit}>
          <StyledFieldset>
            <legend>Regístrate</legend>
            <StyledInput
              value={firstName}
              name="firstName"
              id="firstName"
              onChange={this.handleChange}
              children="Nombre"
              type="text"
              required="required"
            />
            <StyledInput
              value={lastName}
              name="lastName"
              id="lastName"
              onChange={this.handleChange}
              children="Apellido"
              type="text"
              required="required"
            />
            <StyledInput
              value={email}
              name="email"
              id="email"
              onChange={this.handleChange}
              children="E - mail"
              type="text"
              required="required"
            />
            <StyledInput
              value={phoneNum}
              name="phoneNum"
              id="phoneNum"
              onChange={this.handleChange}
              children="Teléfono"
              type="tel"
              required="required"
            />
            <StyledInput
              value={password}
              name="password"
              id="password"
              onChange={this.handleChange}
              children="Contraseña"
              type="password"
              required="required"
            />
            <StyledInput
              value={passwordConfirm}
              name="passwordConfirm"
              id="passwordConfirm"
              onChange={this.handleChange}
              children="Confírmala"
              type="password"
              required="required"
            /> 

            <Container>
              <RadioLabel htmlFor="isBike" className="radioLabel">
                Moto
              </RadioLabel>
              <RadioInput
                type="radio"
                name="userType"
                id="isBike"
                value="user"
                onChange={this.handleChange}
                required="required"
              />

              <RadioLabel htmlFor="isTow" className="radioLabel">
                Grúa
              </RadioLabel>
              <RadioInput
                type="radio"
                name="userType"
                id="isTow"
                value="supplier"
                onChange={this.handleChange}
                required="required"
              />
            </Container>
          </StyledFieldset>

          <Container>
            <Button type="submit" color="primary">
              Aceptar
            </Button>
            <StyledLink to="/">Cancelar</StyledLink>
          </Container>
        </form>
      </Frame>
     )
    }
  }

  export default Register
