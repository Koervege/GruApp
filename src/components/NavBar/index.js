import React from "react";
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../logo.png';
import  MenuNavBar from "../MenuNavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getLoggedUser, deleteError } from '../../store/usersReducer';
import { faMotorcycle, faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { 
  Nav, 
  ATags, 
  Image,
  ImgBtn, 
  NavIcon, 
  NavList, 
  NavItems, 
  NavProfiles, 
  NavUserPhoto, 
  NavContainer, 
  LandNavLogin,
  HistoryButton, 
  NavProfilesSpan, 
  LandNavLoginCont, 
} from "./styles";
import ServiceHistoryMenu from '../ServiceHistoryMenu';

export default function NavBar() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
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

  let location = useLocation();
  const history = useHistory();

  useEffect(() => {
    token && dispatch(getLoggedUser(history));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, token]);

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

  const hideHistory = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)){
      setDisplayHistory(false);
    }
  }

  return (
    <>
      {token ? (
        <Nav>
          {location.pathname !== '/' ? (
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
                    onBlur={hideHistory}
                  >
                    {'Historial'} {displayHistory && <ServiceHistoryMenu />}
                  </HistoryButton>
                </NavItems>
              </NavList>
            </NavContainer>
          ) : (
            <NavContainer>
              <NavIcon>
                <ATags to="/">
                  <Image src={logo} alt="GruApp logo"></Image>
                </ATags>
              </NavIcon>
            </NavContainer>
          )}
          {location.pathname !== '/' ? (
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
          ) : (
            <NavProfiles>
              {userType && userType === 'client' ? (
                <LandNavLogin to="/listmotorcycle">
                  Solicitar servicio
                </LandNavLogin>
              ) : (
                <LandNavLogin to="/listtow">Ver servicios</LandNavLogin>
              )}
              <ImgBtn
                onClick={() => setDisplayMenu(!displayMenu)}
                onBlur={hideMenu}
              >
                <NavUserPhoto src={userFront.photo} alt="profile_photo" />
                {displayMenu && <MenuNavBar />}
              </ImgBtn>
            </NavProfiles>
          )}
        </Nav>
      ) : (
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
      )}
    </>
  );
}
