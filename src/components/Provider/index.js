import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Photo, ContainerList, ContainerElement, SectionList } from './styles';
import Button from '../../components/Button';
import Swal from 'sweetalert2';
import { getServices, deleteError } from '../../store/servicesReducer';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert'
import { useHistory } from "react-router-dom";

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
<<<<<<< HEAD
      console.log(userFront.towIDs[0]);
=======
>>>>>>> 5bf75d3db71c3d239bf85bc1967a27d5e9831a8e
      dispatch(getServices(`towID=${userFront.towIDs[0]._id}`));
    }
  }, [userFront.email]);

  if(loading) return <p>loading...</p>
  if (errorServices) {
    localStorage.removeItem('token');
    history.push('/login');
    swal({
      title: 'Algo salió mal!',
      text:
        'Por favor, ingresa de nuevo a la aplicación con tu usuario y contraseña.',
      icon: 'error',
    });

    dispatch(deleteError());
  }

  return (
    <SectionList>
      {!!services && !!userFront &&
        services.length > 0 &&
        services.map(({ _id, initLoc, finalLoc, date, bikeID }) => {
          const dateArr = date.split('-');
          const newDate = new Date(dateArr[0], dateArr[1], dateArr[2]);
          const dateFormat = format(newDate, 'PPPP', { locale: es });
          return (
            <ContainerList key={_id}>
              <ContainerElement>{bikeID.clientID.name}</ContainerElement>
              <ContainerElement>{`${initLoc} / ${finalLoc} / ${dateFormat} / ${bikeID.type} / ${bikeID.cc} cc`}</ContainerElement>
              <ContainerElement>
                <Photo
                  src={bikeID.clientID.photo}
                  alt={bikeID.clientID.name}
                ></Photo>
              </ContainerElement>
              <ContainerElement>
                  <Button color="primary">
                    Detalles
                  </Button>
                </ContainerElement>
            </ContainerList>
          );
        })}
    </SectionList>
  );
}

export default Provider;