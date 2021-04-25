import React from "react";
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getLoggedUser, deleteError } from '../../store/usersReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavContainer, NavIcon, NavList, NavItems, ATags, NavProfiles, NavProfilesSpan, NavUserPhoto, ImgBtn, Image, LandNavLoginCont, LandNavLogin } from "./styles";
import  MenuNavBar from "../MenuNavBar";
import logo from '../../logo.png';

export default function NavBar() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const [displayMenu, setDisplayMenu] = useState(false);

  const { userFront, userType, loading, errorUsers } = useSelector(
    ({ usersReducer }) => ({
      userFront: usersReducer.userFront,
      userType: usersReducer.userType,
      loading: usersReducer.loading,
      errorUsers: usersReducer.errorUsers,
    })
  );

  let location = useLocation();

  useEffect(() => {
    dispatch(getLoggedUser());
  }, []);

  let iconNav = '';
  userType === 'client' ? (iconNav = faMotorcycle) : (iconNav = faTruckPickup);
  if (loading) return <p>Loading...</p>;
  if (errorUsers) {
    localStorage.removeItem('token');
    dispatch(deleteError());
  }

  const hideMenu = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)){
      setDisplayMenu(false);
    }
  }

  return (
    <>
      {token ?
        <Nav>
          {location.pathname !== '/' ?
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
          :
            <NavContainer>
              <NavIcon>
                <ATags to="/">
                  <Image src={logo} alt="GruApp logo"></Image>
                </ATags>
              </NavIcon>
            </NavContainer>
          }
          {location.pathname !== '/' ?
            <NavProfiles>
              <NavProfilesSpan>{userFront.name}</NavProfilesSpan>
              <ImgBtn
                onClick={() => setDisplayMenu(!displayMenu)}
                onBlur={hideMenu}
              >
                <NavUserPhoto src={userFront.photo} alt="profile_photo" />
                {displayMenu && <MenuNavBar />}
              </ImgBtn>
            </NavProfiles>
          :
            <NavProfiles>
              {userType && userType === 'client' ?
                <LandNavLogin to="/listmotorcycle">
                  Solicitar servicio
                </LandNavLogin>
              :
                <LandNavLogin to="/listtow">Ver servicios</LandNavLogin>
              }
              <ImgBtn
                onClick={() => setDisplayMenu(!displayMenu)}
                onBlur={hideMenu}
              >
                <NavUserPhoto src={userFront.photo} alt="profile_photo" />
                {displayMenu && <MenuNavBar />}
              </ImgBtn>
            </NavProfiles>
          }
        </Nav>
      :
        <Nav>
          <NavContainer>
            <NavIcon>
              <ATags to="/">
                <Image src={logo} alt="GruApp logo"></Image>
              </ATags>
            </NavIcon>
          </NavContainer>
          <LandNavLoginCont>
            <LandNavLogin to="/register">Registrate</LandNavLogin>
            <LandNavLogin to="/login">Ingresa</LandNavLogin>
          </LandNavLoginCont>
        </Nav>
      }
    </>
  );
}
