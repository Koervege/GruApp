import swal from 'sweetalert';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {buttonValues} from '../../buttonValues'
import Button from '../../components/Button';
import { getServices, updateService ,deleteError } from '../../store/servicesReducer';
import { SectionList, ContainerList, Photo, IntDivider, Information, Meter } from './styles';

function ServiceClient() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, errorServices, services, bikeIDs } = useSelector(
    ({ servicesReducer, usersReducer }) => ({
      loading: servicesReducer.loading,
      services: servicesReducer.services,
      bikeIDs: usersReducer.userFront.bikeIDs,
      errorServices: servicesReducer.errorServices,
    })
  );

  useEffect(() => {
    bikeIDs && bikeIDs[0] &&
      dispatch(getServices(`bikeID=${bikeIDs[0]._id}`));
  }, []);

  if (loading) return <p>loading...</p>;

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
  
  function CancelService( _id ){
    const dataUpdate = { servStat : 'Cancelado'}
    dispatch(updateService( _id, dataUpdate ));
  }
  return (
    <SectionList>
      {!!services &&
        services.length > 0 &&
        services.map(({ _id, initLoc, finalLoc, towID, servStat }) => {

          return (
            towID.supplierID &&
              servStat !== 'Cancelado' &&
              servStat !== 'Calificado' && (
              <ContainerList key={_id}>
                <IntDivider>
                  <Photo
                    src={towID.supplierID.photo}
                    alt={towID.supplierID.name}
                  />
                  <p>{towID.supplierID.name}</p>
                </IntDivider>
                <Information>
                  <Meter
                    id="progress"
                    min="0"
                    max="100"
                    low="25"
                    high="60"
                    optimum="100"
                    value={buttonValues[servStat].value}
                  ></Meter>
                  <label htmlFor="progress">
                    {buttonValues[servStat].content}
                  </label>
                  <p>
                    {initLoc} - {finalLoc}
                  </p>
                </Information>
                <IntDivider>
                  {servStat !== 'Inicio' &&
                    servStat !== 'Destino' &&
                    servStat !== 'Solicitado' && (
                      <Button color={buttonValues[servStat].color}>
                        {buttonValues[servStat].content}
                      </Button>
                    )}
                  {servStat !== 'Terminado' && servStat !== 'Pagado' && (
                    <Button
                      color="danger"
                      onClick={() => CancelService(_id)}
                    >
                      Cancelar
                    </Button>
                  )}
                </IntDivider>
              </ContainerList>
            )
          );
        })}
    </SectionList>
  );
}

export default ServiceClient;
