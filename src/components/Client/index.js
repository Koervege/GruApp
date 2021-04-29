import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteError } from '../../store/servicesReducer'
import { SectionList } from '../Provider/styles';
import Stars from '../Stars'
import CountServices from '../CountServices';
import Button from '../../components/Button';
import ModalService from '../CreateServiceModal';
import { Photo, ContainerStar, ContainerList, ContainerElement } from './styles';

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
          return !!status && (
            <ContainerList key={_id}>
              <ContainerElement><p>{supplierID.name}</p></ContainerElement>
              <ContainerStar>
                <Stars services={serviceIDs} />
              </ContainerStar>
              <ContainerElement>
                <p><CountServices services={serviceIDs}/></p>
              </ContainerElement>
              <ContainerElement>
                <Photo src={supplierID.photo} alt={supplierID.name}></Photo>
              </ContainerElement>
              <ContainerElement>
                <Button color="primary" onClick={ModalService(_id, dispatch, userFront, supplierID.name)}>
                  Pedir Grúa
                </Button>
              </ContainerElement>
            </ContainerList>
          );
        })}
    </SectionList>
  );
}

export default Client;
