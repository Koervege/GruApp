import React from 'react';
import { Menu, MenuItem } from "./styles";
import { useDispatch } from 'react-redux';
import { logUserOut } from '../../store/usersReducer'
import { clearServices } from '../../store/servicesReducer'



export default function MenuNavBar() {

  const dispatch = useDispatch();

  function logOut() {
    localStorage.clear();
    dispatch(logUserOut());
    dispatch(clearServices());
  };
  
  return (
    <Menu>
      <MenuItem to="/userinfo">Ver perfil</MenuItem>
      <MenuItem to="/" onClick={() => logOut()}>Cerrar sesión</MenuItem>
    </Menu>
  );  
};
