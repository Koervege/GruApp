import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BoxSupplier } from '../ListMotorcycle/styles';
import { getServices } from '../../store/servicesReducer';
import Provider from '../../components/Provider';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';

function ListTow() {
  const dispatch = useDispatch();
  const { loading, services, error } = useSelector(({ servicesReducer }) => ({
    loading: servicesReducer.loading,
    services: servicesReducer.services,
    error: servicesReducer.error,
  }));

  useEffect(() => {
    dispatch(getServices());
  }, []);

  if(loading) return <p>loading...</p>
  if (error) return <p>Algo salió mal!</p>;
  return (
    <section>
      <NavBar />
      <BoxSupplier>
        <Button color="primary">Ha ganado XX.XXX COP</Button>
        <Provider services={services} />
        <Button color="success">Servicio en proceso</Button>
      </BoxSupplier>
    </section>
  );
}

export default ListTow;
