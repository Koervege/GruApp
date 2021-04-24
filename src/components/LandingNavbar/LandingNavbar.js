import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { deleteError } from '../../store/usersReducer';
import logo from '../../logo.png';
import {
  LandNavContainer,
  LandNavIcons,
  LandNavLogin,
  LandNavLoginCont,
  LandNavbar,
  Image,
} from './styles';

export default function LandingNavbar() {
  const dispatch = useDispatch();

  const token = localStorage.getItem('token');
  console.log(token)
  const { userFront, userType, loading, errorUsers } = useSelector(
    ({ usersReducer }) => ({
      userFront: usersReducer.userFront,
      userType: usersReducer.userType,
      loading: usersReducer.loading,
      errorUsers: usersReducer.errorUsers,
    })
  );
  console.log(userFront)
  let history = useHistory();

  if (loading) return <p>Loading...</p>;
  if (errorUsers) {
    localStorage.removeItem('token');
    history.push('/login');
    dispatch(deleteError());
    Swal.fire(
      'Algo salió mal!',
      'Por favor, ingresa de nuevo a la aplicación con tu usuario y contraseña',
      'error'
    );
  }

  return (
    <LandNavbar>
      <LandNavContainer>
        <LandNavIcons>
          <Image src={logo} alt="GruApp logo"></Image>
        </LandNavIcons>
      </LandNavContainer>
      {token ?
        <LandNavLoginCont>
          {userType && userType === 'client' ?
            <LandNavLogin to="/listmotorcycle">Solicitar servicio</LandNavLogin>
          :
            <LandNavLogin to="/listtow">Ver servicios</LandNavLogin>
          }
          {userFront && <Image src={userFront.photo} alt="GruApp logo"></Image>}
        </LandNavLoginCont>
      :
        <LandNavLoginCont>
          <LandNavLogin to="/register">Registrate</LandNavLogin>
          <LandNavLogin to="/login">Ingresa</LandNavLogin>
        </LandNavLoginCont>
      }
    </LandNavbar>
  );
}

