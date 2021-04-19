import React from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { useDispatch } from 'react-redux';
import {ATags} from '../../components/NavBar/styles'
import { useForm } from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { loginUser } from '../../store/usersReducer'
import { StyledFieldset, Legend, StyledLink } from '../Register/styles';
import { Background } from '../../components/Background/index';


function Login() {

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });
  
  const dispatch = useDispatch();
  
  const { email, password } = formValues;
  let history = useHistory();

  const searchUser = async (event) => {
    event.preventDefault();

    dispatch(loginUser(email, password, history));

  };

  return (
    <Background>
    <Frame>
      <Container>
        <Img src={logo} radius="100" width="100" height="100" alt="logo" />
      </Container>
      <form onSubmit={ searchUser }>
        <StyledFieldset>
          <Legend>Identifícate</Legend>
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
        </StyledFieldset>  
      </form>
      <Container>
        <small>
          Aun no estás registrado? <ATags tagType="bold" to="/register">Registrarse</ATags>
        </small>
      </Container>
    </Frame>
    </Background>
    );
}  

export default Login;
