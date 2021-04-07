import Swal from 'sweetalert2';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createService, deleteError } from '../../store/servicesReducer'
import {
  Photo,
  ContainerList,
  ContainerElement,
  SectionList,
} from '../Provider/styles';
import Button from '../../components/Button';
import { ContainerStar, StarSolid, StarEmpty } from './styles';

function Client({ tows }) {
  const dispatch = useDispatch();
  const { userFront, loading, errorServices } = useSelector(({ servicesReducer, usersReducer }) => ({
    userFront: usersReducer.userFront, 
    loading: servicesReducer.loading,
    errorServices: servicesReducer.errorServices,
  }));

  function modalService(towID) {
    return function() {
      (async () => {
        const { value: formValues } = await Swal.fire({
          title: 'Crea tu servicio',
          html: 
          `
            <input id="swal-input1" placeholder="Inicio" class="swal2-input"> 
            <input id="swal-input2" placeholder="Destino" class="swal2-input">
            <input type="date" id="swal-input3" class="swal2-input">
          `,
          focusConfirm: false,
          preConfirm: () => {
            return [
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value,
              document.getElementById('swal-input3').value,
            ];
          },
        });
  
        if (formValues) {
          const initLoc = formValues[0];
          const finalLoc = formValues[1];
          const date = formValues[2];
          const bikeID = userFront.bikeIDs[0];
          
          dispatch(
            createService(
              initLoc,
              finalLoc,
              date,
              bikeID,
              towID,
          ))
        }
      })();
    }
  }
  
  function Stars({ services }) {
    let count = '';
    let rating =
      services.map((service) => (service.rating));
      for (let i = 0; i < rating.length; i++) {
        if( rating[i] ){
          count = count + rating[i];
        }
      }
    if (!rating) {
      rating = '0';
    }

    return (
      <section>
        {Array.from({ length: Math.floor(count) }, (e, i) => (
          <StarSolid key={i}>
            <FontAwesomeIcon icon={faStar} />
          </StarSolid>
        ))}
        {Array.from({ length: Math.ceil(5 - count) }, (e, i) => (
          <StarEmpty key={i}>
            <FontAwesomeIcon icon={emptyStar} />
          </StarEmpty>
        ))}
      </section>
    );
  }

  let history = useHistory();

  if(loading) return <p>Loading...</p>
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
      {!!tows &&
        tows.length > 0 &&
        tows.map(({ _id, supplierID, serviceIDs, status }) => {
          if(status){
            return (
              <ContainerList key={_id}>
                <ContainerElement>{supplierID.name}</ContainerElement>
                <ContainerStar>
                  <Stars services={serviceIDs} />
                </ContainerStar>
                <ContainerElement>
                  {`${serviceIDs.length} servicio${
                    serviceIDs.length === 1 ? '' : 's'
                  }`}
                </ContainerElement>
                <ContainerElement>
                  <Photo src={supplierID.photo} alt={supplierID.name}></Photo>
                </ContainerElement>
                <ContainerElement>
                  <Button color="primary" onClick={modalService(_id)}>
                    Pedir Grúa
                  </Button>
                </ContainerElement>
              </ContainerList>
            );
          }
        })}
    </SectionList>
  );
}

export default Client;
