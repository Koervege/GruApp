import React from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import swal from 'sweetalert';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { StyledLink, StyledFieldset, RadioInput, RadioLabel} from "./styles";
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { registerUser, deleteError } from '../../store/usersReducer'

function Register() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [userTypeForm, setUserTypeForm] = useState('');
  const [passwordError, setPasswordError] = useState(null);

  const dispatch = useDispatch();
  const { loading, errorUsers } = useSelector(({ usersReducer }) => ({
    loading: usersReducer.loading,
    errorUsers: usersReducer.errorUsers,
  }));

  let history = useHistory();

  function handlePasswordMatch(e) {
    if(e.target.value !== password) {
      setPasswordError('Las contraseñas no son iguales');
      return;
    };
    setPasswordError(null);
  };

  function handleSubmit(e) {
    e.preventDefault();
    
    if(passwordError) {
      swal({
        title: 'Las contraseñas no son las mismas',
        text:
        'Por favor revisa las contraseñas e intenta enviar nuevamente.',
        icon: 'error',
      });
      return;
    };

    dispatch(registerUser(firstName, lastName, email, phoneNum, password, userTypeForm));

    if(errorUsers) {
      dispatch(deleteError());
      swal({
        title: 'Algo salió mal!',
        text:
        'Ocurrió un error al enviar tu información. Inténtalo de nuevo más tarde.',
        icon: 'error',
      });
      return;
    };
    history.push(`/userinfo/`);
  };

  if(loading) return <p>Un momento por favor...</p>
  return (
    <Frame>
      <Container>
      <Img src={logo} radius="150" width="150" height="150" alt="logo" />
      </Container>

      <form onSubmit={handleSubmit}>
        <StyledFieldset>
          <legend>Regístrate</legend>
          <StyledInput
            value={firstName}
            name="firstName"
            id="firstName"
            onChange={e => setFirstName(e.target.value)}
            children="Nombre"
            type="text"
            required="required"
          />
          <StyledInput
            value={lastName}
            name="lastName"
            id="lastName"
            onChange={e => setLastName(e.target.value)}
            children="Apellido"
            type="text"
            required="required"
          />
          <StyledInput
            value={email}
            name="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
            children="E - mail"
            type="email"
            required="required"
          />
          <StyledInput
            value={phoneNum}
            name="phoneNum"
            id="phoneNum"
            onChange={e => setPhoneNum(e.target.value)}
            children="Tel. Móvil"
            type="tel"
            pattern='[0-9]{10}'
            required="required"
          />
          <StyledInput
            value={password}
            name="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            children="Contraseña"
            type="password"
            required="required"
          />
          <StyledInput
            value={passwordConfirm}
            name="passwordConfirm"
            id="passwordConfirm"
            onChange={e => [setPasswordConfirm(e.target.value), handlePasswordMatch(e)]}
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
              name="userTypeForm"
              id="isBike"
              value="client"
              onChange={e => setUserTypeForm(e.target.value)}
              required="required"
            />

            <RadioLabel htmlFor="isTow" className="radioLabel">
              Grúa
            </RadioLabel>
            <RadioInput
              type="radio"
              name="userTypeForm"
              id="isTow"
              value="supplier"
              onChange={e => setUserTypeForm(e.target.value)}
              required="required"
            />
          </Container>
        </StyledFieldset>

        <Container>
          <Button type="submit" color="primary">
            Enviar
          </Button>
          <StyledLink to="/">Cancelar</StyledLink>
        </Container>
      </form>
    </Frame>
  )

}

export default Register
