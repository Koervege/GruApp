import React from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {ATags} from '../../components/NavBar/styles'
import { useForm } from '../../hooks/useForm';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import { loginUser, deleteError } from '../../store/loginReducer'
import { StyledFieldset } from '../Register/styles';

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
  
  const dispatch = useDispatch();
  const { loading, errorLogin, userType } = useSelector(({ loginReducer }) => ({
    loading: loginReducer.loading,
    errorLogin: loginReducer.errorLogin,
    userType: loginReducer.userType,
  }));  

  
  const { email, password } = formValues;
  let history = useHistory();

  const searchUser = async (event) => {
    event.preventDefault();

    dispatch(loginUser(email, password, history));

  };

  return (
    <Frame>
      <Container>
        <Img src={logo} radius="100" width="100" height="100" alt="logo" />
      </Container>
      <form onSubmit={ searchUser }>
        <StyledFieldset>
          <legend>Indentifícate</legend>
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
          Aun no estás registrado? <ATags to="/register">Registrarse</ATags>
        </small>
      </Container>
    </Frame>
    );
}  

export default Login;
