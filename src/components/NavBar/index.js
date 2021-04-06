import React from "react";
import swal from 'sweetalert';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLoggedUser, deleteError } from '../../store/usersReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavContainer, NavIcon, NavList, NavItems, ATags, NavProfiles, NavProfilesSpan, NavUserPhoto } from "./styles";

export default function NavBar(userID) {
  const dispatch = useDispatch();

  const { userFront, userType, loading, errorUsers } = useSelector(
    ({ usersReducer }) => ({
      userFront: usersReducer.userFront,
      userType: usersReducer.userType,
      loading: usersReducer.loading,
      errorUsers: usersReducer.errorUsers,
    })
  );

  let history = useHistory();

  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);

  let iconNav = '';
  userType === 'client' ? (iconNav = faMotorcycle) : (iconNav = faTruckPickup);
  if (loading) return <p>Loading...</p>;
  if (errorUsers) {
    localStorage.removeItem('token');
    history.push('/login');
    dispatch(deleteError());
    swal({
      title: 'Algo salió mal!',
      text:
        'Por favor, ingresa de nuevo a la aplicación con tu usuario y contraseña.',
      icon: 'error',
    });
  }

  return (
    <Nav>
      <NavContainer>
        <NavIcon>
          <ATags to="/">
            <FontAwesomeIcon icon={iconNav} />
          </ATags>
        </NavIcon>
        <NavList>
          <NavItems>
            <ATags to="/">Historial</ATags>
          </NavItems>
          <NavItems>
            <ATags to="/">Notificaciones</ATags>
          </NavItems>
        </NavList>
      </NavContainer>
      <NavProfiles>
        <NavProfilesSpan>{userFront.name}</NavProfilesSpan>
        <ATags to="/">
          <NavUserPhoto src={userFront.photo} alt="profile_photo" />
        </ATags>
      </NavProfiles>
    </Nav>
  );

}