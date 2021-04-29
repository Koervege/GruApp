import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { buttonValues } from '../../buttonValues';
import { setEpaycoData, handler } from '../../setEpaycoData';
import Button from '../../components/Button';
import CancelService from '../CancelServiceModal';
import AceptService from '../AceptServiceModal'
import AddInformation from '../AddInformationModal';
import { getServices ,deleteError } from '../../store/servicesReducer';
import { SectionList, ContainerList, Photo, IntDivider } from './styles';
import ContainerInformationService from '../ContainerInformationService';

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
  }, [services.length, dispatch, bikeIDs]);

  if (loading) return <p>loading...</p>;

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

  const handleClick = (
    _id,
    servStat,
    cost,
    initLoc,
    finalLoc,
    hour,
    date,
    tow,
    index,
  ) => {
    if (servStat === 'Terminado') {
      const data = setEpaycoData(_id, cost, initLoc, finalLoc, name );
      setDisablePayButton(true);
      handler.open(data);
      setTimeout(() => {
        setDisablePayButton(false);
      }, 4000);
            
    } else if (servStat === 'Aceptado') {
      AceptService( _id, tow, date, hour, cost, index, dispatch );
    } else if (servStat === 'Pagado') {
      AddInformation(_id, tow, index, dispatch);
    }
  };
  
  return (
    <SectionList>
      {!!services &&
        services.length > 0 &&
        services.map(({ _id, initLoc, finalLoc, towID, servStat, cost, hour, date }, index) => {
          const dateArr = date.split('-');
          const newDate = new Date(dateArr[0], dateArr[1], dateArr[2]);
          const dateFormat = format(newDate, 'PPPP', { locale: es });
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
                
                <ContainerInformationService 
                  servStat={servStat} 
                  initLoc={initLoc}
                  finalLoc={finalLoc}
                  hour={hour} 
                  date={dateFormat}
                />
                
                <IntDivider>
                  {servStat !== 'Solicitado' &&
                    servStat !== 'Confirmado' &&
                    servStat !== 'Inicio' && 
                    servStat !== 'Destino' && (
                      <Button
                        color={ buttonValues[servStat].color }
                        isWaiting={ disablePayButton && servStat === 'Terminado' }
                        onClick={() =>
                          handleClick(
                            _id,
                            servStat,
                            cost,
                            initLoc,
                            finalLoc,
                            hour,
                            date,
                            towID,
                            index
                          )
                        }
                        disabled={ disablePayButton }
                      >
                        {buttonValues[servStat].content}
                      </Button>
                    )}
                  {servStat !== 'Terminado' && servStat !== 'Pagado' && (
                    <Button
                      color="danger"
                      onClick={() =>
                        CancelService( _id, index, towID.supplierID.name, dispatch )}
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
