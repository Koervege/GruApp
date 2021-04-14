import swal from 'sweetalert';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { BoxSupplier } from '../ListMotorcycle/styles';
import { getServices, deleteError } from '../../store/servicesReducer';
import Provider from '../../components/Provider';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';

function ListTow() {
  const dispatch = useDispatch();
  const { loading, services, userID, errorServices } = useSelector(({ servicesReducer }) => ({
    loading: servicesReducer.loading,
    services: servicesReducer.services,
    userID: servicesReducer.userID,
    errorServices: servicesReducer.errorServices,
  }));

  useEffect(() => {
    dispatch(getServices());
  }, []);

  let history = useHistory();
  
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
    <section>
      <NavBar userID={userID}/>
      <BoxSupplier>
        <Provider services={services} />
      </BoxSupplier>
    </section>
  );
}

export default ListTow;
