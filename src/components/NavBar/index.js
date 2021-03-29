import React from "react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getClients } from '../../store/clientsReducer';
import { getSuppliers } from '../../store/suppliersReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle, faTruckPickup } from '@fortawesome/free-solid-svg-icons'
import { Nav, NavContainer, NavIcon, NavList, NavItems, ATags, NavProfiles, NavProfilesSpan, NavUserPhoto } from "./styles";

export default function NavBar(userID) {
  const dispatch = useDispatch();

  const { clients, errorClients } = useSelector(({ clientsReducer }) => ({
      clients: clientsReducer.clients,
      errorClients: clientsReducer.errorClients,
    })
  );
  const { suppliers, errorSuppliers } = useSelector(({ suppliersReducer }) => ({
      suppliers: suppliersReducer.suppliers,
      errorSuppliers: suppliersReducer.errorSuppliers,
  }));

  if( errorClients || errorSuppliers ) {
    alert('Algo salió mal!');
    this.props.history.push('/login');
  }
  useEffect(() => {
    dispatch(getClients());
    dispatch(getSuppliers());
  }, []);
  

  let [user] = clients.filter((client) => userID.userID === client._id);
  let iconNav = faMotorcycle;
  
  if (!user) {
    [user] = suppliers.filter((supplier) => userID.userID === supplier._id);
    iconNav = faTruckPickup;
  }
  if(user){
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
          <NavProfilesSpan>{user.name}</NavProfilesSpan>
          <ATags to="/">
            <NavUserPhoto src={user.photo} alt="profile_photo" />
          </ATags>
        </NavProfiles>
      </Nav>
    );
  }else return <p>Loading...</p>
}
