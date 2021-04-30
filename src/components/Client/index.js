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
import React from 'react';
import MapModal from '../MapModal'

/* ---------------Modal------------------------------------------------ */
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')
/* --------------------------------------------------------------- */

function Client({ tows }) {
  const dispatch = useDispatch();
  const { userFront, loading, errorServices } = useSelector(({ servicesReducer, usersReducer }) => ({
    userFront: usersReducer.userFront, 
    loading: servicesReducer.loading,
    errorServices: servicesReducer.errorServices,
  }));
  let history = useHistory();

/* ------------Modal--------------------------------------------------- */
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }
/* --------------------------------------------------------------- */

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
                <button onClick={openModal}>Open Modal</button>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <MapModal/>
                  <button onClick={closeModal}>close</button>
                </Modal>
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
