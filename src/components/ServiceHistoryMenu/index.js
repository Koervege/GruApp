import React, { useEffect } from 'react';
import { Menu, MenuItem, ContainerList } from "./styles";
import { useSelector } from 'react-redux';


export default function ServiceHistoryMenu() {

  const { userType, servicesHistory} = useSelector(
    ({ usersReducer, servicesReducer }) => ({
      userType: usersReducer.userType,
      servicesHistory: servicesReducer.servicesHistory,
    })
  );

  return (
    <Menu>
      {
        !!servicesHistory && servicesHistory.length > 0 &&
        !!userType && userType !== '' && 
        servicesHistory.map((service) => {
          return (
            <ContainerList key={service._id}>
              <MenuItem>
                {`
                  ${userType === 'client' ? 
                    'Proveedor: ' + service.towID.supplierID.name 
                    :
                    'Cliente: ' + service.bikeID.clientID.name} 
                  Fecha: ${service.date}
                  Estado: ${service.servStat}
                `}
              </MenuItem>
            </ContainerList>
          );
        })}
    </Menu>
  );  
};

export default ServiceHistoryMenu;
/* { 
  _id, 
  date, 
  clientName: bikeID.clientID.name, 
  supplierName: towID.supplierID.name,
  servStat,
} */