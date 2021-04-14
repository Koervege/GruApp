import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteError } from '../../store/servicesReducer'
import {
  Photo,
  ContainerList,
  ContainerElement,
  SectionList,
} from '../Provider/styles';
import Stars from '../Stars'
import CountServices from '../CountServices';
import Button from '../../components/Button';
import ModalService from '../CreateServiceModal';
import { ContainerStar } from './styles';

function Client({ tows }) {
  const dispatch = useDispatch();
  const { userFront, loading, errorServices } = useSelector(({ servicesReducer, usersReducer }) => ({
    userFront: usersReducer.userFront, 
    loading: servicesReducer.loading,
    errorServices: servicesReducer.errorServices,
  }));

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
                  <CountServices services={serviceIDs}/>
                </ContainerElement>
                <ContainerElement>
                  <Photo src={supplierID.photo} alt={supplierID.name}></Photo>
                </ContainerElement>
                <ContainerElement>
                  <Button color="primary" onClick={ModalService(_id, dispatch, userFront)}>
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
