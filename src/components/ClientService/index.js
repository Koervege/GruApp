import { useSelector } from 'react-redux';
import Button from '../../components/Button';
import { SectionList, ContainerList } from './styles';

function SelectButton({ status }){
  let color='';
  let content='';
  const buttonValues = {
    Terminado:{
      color: 'primary',
      content: 'Calificar servicio',
      value: '100',
    },
    Solicitado:{
      color: '',
      content: 'Pendiente servicio',
      value: '0',
    },
    Aceptado:{
      color:'success',
      content:'Servicio aceptado',
      value: '15',
    }
  }
  if(status === 'Terminado'){
    color='success';
    content='Pagar';

  }else if(status === 'Solicitado') {
    content = 'Pendiente servicio';

  }else if(status === 'Aceptado'){
    color='success';
    content='Servicio aceptado';
  }else if(status === 'Pagado'){
    color='primary';
    content='Calificar servicio';
  }

  return (
    <div>
      <Button color={color}>{content}</Button>
      {status !== 'Terminado' ? <Button color="danger">Cancelar</Button> : null}
      <label htmlFor="progress">Disk usage C:</label>
      <meter
        id="progress"
        min="0"
        max="100"
        low="25"
        high="75"
        optimum="100"
        value="15"
      ></meter>
    </div>
  );
}

function ShowService({ services, supplier }) {
  const { userFront } = useSelector(({ usersReducer }) => ({
      userFront: usersReducer.userFront,
    })
  );
  let serviceProcess = []
  if(userFront){
    serviceProcess = services.filter((service) => service.bikeID === userFront.bikeIDs[0]._id);
  }
  return (
    <div>        
      {!!serviceProcess && serviceProcess.length > 0 && 
        serviceProcess.map(({ _id, initLoc, finalLoc, servStat})=>{
          return (
            <ContainerList key={_id}>
              <p>{initLoc}</p>
              <p>{finalLoc}</p>
              <img src={supplier.photo} alt={supplier.name} />
              <SelectButton status={servStat}/>
            </ContainerList>
          );
      })}
    </div>
  )
}

function ServiceClient({ tows }) {
  return (
    <SectionList>
      {!!tows &&
        tows.length > 0 &&
        tows.map(({ _id, serviceIDs, supplierID }) => {
          return (
            <div key={_id}>
              <ShowService services={serviceIDs} supplier={supplierID} />
            </div>
          );
        })}
    </SectionList>
  );
}

export default ServiceClient;
