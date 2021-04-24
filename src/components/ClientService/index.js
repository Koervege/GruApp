import swal from 'sweetalert';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { buttonValues } from '../../buttonValues';
import { setEpaycoData, handler } from '../../setEpaycoData';
import Button from '../../components/Button';
import { getServices, updateService ,deleteError } from '../../store/servicesReducer';
import { SectionList, ContainerList, Photo, IntDivider, Information, Meter } from './styles';

function ServiceClient() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [disablePayButton, setDisablePayButton] = useState(false);

  const { loading, errorServices, services, bikeIDs, name } = useSelector(
    ({ servicesReducer, usersReducer }) => ({
      loading: servicesReducer.loading,
      services: servicesReducer.services,
      bikeIDs: usersReducer.userFront.bikeIDs,
      errorServices: servicesReducer.errorServices,
      name:usersReducer.userFront.name,
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

  const handleClick = (_id, servStat, cost, initLoc, finalLoc )  => {
    
    if( servStat === 'Terminado'){
      const data = setEpaycoData(_id, cost, initLoc, finalLoc, name );
      setDisablePayButton(true);
      handler.open(data);
    }

  }
  
  function CancelService( _id ){
    const dataUpdate = { servStat : 'Cancelado'}
    dispatch(updateService( _id, dataUpdate ));
  }
  return (
    <SectionList>
      {!!services &&
        services.length > 0 &&
        services.map(({ _id, initLoc, finalLoc, towID, servStat, cost }) => {

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
                    servStat !== 'Solicitado' &&
                    <Button 
                      color={buttonValues[servStat].color}
                      disabled = { disablePayButton }
                      onClick={ () => handleClick(_id, servStat, cost, initLoc, finalLoc ) }>
                      {buttonValues[servStat].content}
                    </Button>
                  }
                </IntDivider>    
                <IntDivider>
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
