import React from "react";
import swal from 'sweetalert';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLoggedUser, deleteError } from '../../store/usersReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { 
  Nav, 
  NavContainer, 
  NavIcon, 
  NavList, 
  NavItems, 
  ATags, 
  NavProfiles, 
  NavProfilesSpan, 
  NavUserPhoto, 
  ImgBtn, 
  HistoryButton, 
} from "./styles";
import  MenuNavBar from "../MenuNavBar";
import ServiceHistoryMenu from '../ServiceHistoryMenu';

export default function NavBar() {
  const dispatch = useDispatch();

  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayHistory, setDisplayHistory] = useState(false);

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

  const hideMenu = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)){
      setDisplayMenu(false);
    }
  }

  const hideHistory = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)){
      setDisplayHistory(false);
    }
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
            <HistoryButton 
              onClick={() => setDisplayHistory(!displayHistory)} 
              onBlur={hideHistory}>
                {'Historial'} {displayHistory && <ServiceHistoryMenu/>}
            </HistoryButton>
          </NavItems>
        </NavList>
      </NavContainer>
      <NavProfiles>
        <NavProfilesSpan>{userFront.name}</NavProfilesSpan>
        <ImgBtn onClick={() => setDisplayMenu(!displayMenu)} onBlur={hideMenu}>
          <NavUserPhoto src={userFront.photo} alt="profile_photo"/>
          {displayMenu && <MenuNavBar/>}
        </ImgBtn>
      </NavProfiles>
    </Nav>
  );

}