import React from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios'; 
import {ATags} from '../../components/NavBar/styles'
import { useForm } from '../../hooks/useForm';
import { useState } from 'react/cjs/react.development';
import { useHistory } from "react-router-dom";

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
function Login() {

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const { email, password } = formValues;

  let history = useHistory();
  // state = {
  //   email: '',
  //   password: '',
  //   error: '',
  // };

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

 const searchUser = async (event) => {
    event.preventDefault();
    console.log(formValues);

    try {
      const { data: { token, userType,userFront } }= await axios({
        method: 'POST',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users/signin',
        data:formValues
      });
      console.log(token, userType)
      localStorage.setItem('token', token);
      (userType === 'client')?
        history.push('/listmotorcycle')
        :
        history.push('/listtow'); 
    } catch (err) {
        setError(err);
        console.log(error);
        alert('Usuario o contraseña equivocados');
    }
  };

  // render() {
  //   const { email, password } = this.state;

    return (
      <Frame>
        <Container>
          <Img src={logo} radius="100" width="100" height="100" alt="logo" />
        </Container>
        <form onSubmit={ searchUser }>
          <StyledInput
            value={ email }
            name="email"
            onChange={ handleInputChange }
            children="Email"
            type="email"
            required="required"
          />
          <StyledInput
            name="password"
            children="Pass"
            value={ password }
            onChange={ handleInputChange }
            type="password"
            required="required"
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

export default Login;
