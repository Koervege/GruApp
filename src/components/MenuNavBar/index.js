import React from 'react';
import { Menu, MenuItem } from "./styles";


export default function MenuNavBar() {

  return (
    <Menu>
      <MenuItem to="/userinfo">Ver perfil</MenuItem>
      <MenuItem to="/" onClick={() =>localStorage.clear()}>Cerrar sesión</MenuItem>
    </Menu>
  );  
};
