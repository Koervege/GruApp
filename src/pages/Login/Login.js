import React from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import signToken from './signin-http';
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
class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  searchUser = async (event) => {
    event.preventDefault();

    try {
      const token = await signToken('/users/signin', this.state);
      localStorage.setItem('token', token);
    } catch (err) {
      try {
        const token = await signToken('/suppliers/signin', this.state);
        localStorage.setItem('token', token);
      } catch (err) {
          alert('Usuario o contraseña equivocados');
      }
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <Frame>
        <Container>
          <Img src={logo} radius="100" width="100" height="100" alt="logo" />
        </Container>
        <form onSubmit={this.searchUser}>
          <StyledInput
            value={email}
            name="email"
            onChange={this.handleChange}
            children="Email"
            type="email"
          />
          <StyledInput
            name="password"
            children="Pass"
            value={password}
            onChange={this.handleChange}
            type="password"
          />
          <Container>
            <Button type="submit" color="primary">
              Login
            </Button>
            <StyledLink to="/">Cancelar</StyledLink>
          </Container>
        </form>

        <Container>
          <small>
            Aun no estás registrado? <ATags to="/register">Registrarse</ATags>
          </small>
        </Container>
      </Frame>
    );
  }
}

export default Login;
