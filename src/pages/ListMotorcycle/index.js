import swal from 'sweetalert';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BoxSupplier } from './styles';
import Client from '../../components/Client';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import { getTows, deleteErrorTows } from '../../store/towsReducer';

function ListMotorcycle () {
  const dispatch = useDispatch();
  const { loading, tows, userID, errorTows } = useSelector(({ towsReducer }) => ({
    loading: towsReducer.loading,
    tows: towsReducer.tows,
    userID: towsReducer.userID,
    errorTows: towsReducer.errorTows,
  }));

  useEffect(() => {
    dispatch(getTows());
  }, []);

  let history = useHistory();

  if (loading) return <p>loading ...</p>;

  if (errorTows) {
    localStorage.removeItem('token');
    history.push('/login');
    swal({
      title: 'Algo salió mal!',
      text:
        'Por favor, ingresa de nuevo a la aplicación con tu usuario y contraseña.',
      icon: 'error',
    });
    dispatch(deleteErrorTows());
  }
  return (
    <section>
      <NavBar userID={userID} />
      <BoxSupplier>
        <Client tows={tows} />
      </BoxSupplier>
    </section>
  );
}


export default ListMotorcycle;
