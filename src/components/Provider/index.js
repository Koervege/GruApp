import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Photo, ContainerList, ContainerElement, SectionList, ContainerOthers } from './styles';
import Button from '../../components/Button';
import Swal from 'sweetalert2';
import { getServices, deleteError } from '../../store/servicesReducer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import towViewService from '../TowViewServiceModal/index'

function Provider() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, errorServices, services,  userFront } = useSelector(
    ({ servicesReducer, usersReducer }) => ({
    loading: servicesReducer.loading,
    errorServices: servicesReducer.errorServices,
    services: servicesReducer.services,
    userFront: usersReducer.userFront,
  }));

  useEffect(() => {
    if(userFront && userFront.towIDs && userFront.towIDs[0]) {
      dispatch(getServices(`towID=${userFront.towIDs[0]._id}`));
    }
  }, [userFront.email]);

  if(loading) return <p>loading...</p>
    if (errorServices) {
      localStorage.removeItem('token');
      history.push('/login');
      Swal.fire(
        'Algo salió mal!',
        'Por favor, ingresa de nuevo a la aplicación con tu usuario y contraseña',
        'error'
      );
      dispatch(deleteError());
    }

  return (
    <SectionList>
      {!!services && !!userFront &&
        services.length > 0 &&
        services.map(({ _id, initLoc, finalLoc, date, bikeID, servStat }, index) => {
          const dateArr = date.split('-');
          const newDate = new Date(dateArr[0], dateArr[1], dateArr[2]);
          const dateFormat = format(newDate, 'PPPP', { locale: es });
          return servStat !== 'Cancelado' && servStat !== 'Calificado' && (
            <ContainerList key={_id}>
              <ContainerOthers>{bikeID.clientID.name}</ContainerOthers>
              <ContainerElement>{`${initLoc} / ${finalLoc} / ${dateFormat} / ${bikeID.type} / ${bikeID.cc}`}</ContainerElement>
              <ContainerOthers>
                <Photo
                  src={bikeID.clientID.photo}
                  alt={bikeID.clientID.name}
                ></Photo>
              </ContainerOthers>
              <ContainerOthers>
                  <Button color="primary" onClick={() => towViewService(_id, servStat, bikeID.clientID.name, dispatch, index)}>
                    Detalles
                  </Button>
                </ContainerOthers>
            </ContainerList>
          );
        })}
    </SectionList>
  );
}

export default Provider;