import React from 'react';
import { Menu, MenuItem, ContainerList } from "./styles";
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';


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
          const dateArr = service.date.split('-');
          const newDate = new Date(dateArr[0], dateArr[1], dateArr[2]);
          const dateFormat = format(newDate, 'PPP', { locale: es });
          return (
            <ContainerList key={service._id}>
              <MenuItem>
                {`
                  ${userType === 'client' ? 
                    service.towID.supplierID.name + ' te prestó servicio'
                    :
                    'Le prestaste servicio a ' + service.bikeID.clientID.name} 
                  el ${dateFormat}
                `}
              </MenuItem>
            </ContainerList>
          );
        })}
    </Menu>
  );  
};
