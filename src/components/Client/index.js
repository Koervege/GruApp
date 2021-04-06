import swal from '@sweetalert/with-react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import {
  Photo,
  ContainerList,
  ContainerElement,
  SectionList,
} from '../Provider/styles';
import Button from '../../components/Button';
import { ContainerStar, StarSolid, StarEmpty } from './styles';

function createService() {
  swal(
    <div>
      <legend>Regístrate</legend>
      <form>
        <fieldset>
          <label htmlFor="initLoc">Inicio</label>
          <input type="text" name="initLoc" id="initLoc" placeholder="Inicio" />
        </fieldset>
        <fieldset>
          <label htmlFor="finalLoc">Destino</label>
          <input
            type="text"
            name="finalLoc"
            id="finalLoc"
            placeholder="Destino"
          />
        </fieldset>
        <fieldset>
          <label htmlFor="date">Fecha de servicio</label>
          <input 
            type="date" 
            name="date" 
            id="date" />
        </fieldset>
      </form>
    </div>,
    {
      buttons: {
        cancel: 'Cancelar',
        catch: {
          text: 'Crear servicio',
          value: 'catch',
        },
      },
    }
  ).then((value) => {
    switch (value) {
      case 'catch':
        swal('Felicitaciones', 'Se envío al conductor tu solicitud', 'success');
        break;

      default:
        swal('Has cancelado la creación del servicio');
    }
  });
}

function Stars({ services }) {
  let count = '';
  const rating =
    services.map((service) => (count += service.rating)) / services.length;

  return (
    <section>
      {Array.from({ length: Math.floor(rating) }, (e, i) => (
        <StarSolid key={i}>
          <FontAwesomeIcon icon={faStar} />
        </StarSolid>
      ))}
      {Array.from({ length: Math.ceil(5 - rating) }, (e, i) => (
        <StarEmpty key={i}>
          <FontAwesomeIcon icon={emptyStar} />
        </StarEmpty>
      ))}
    </section>
  );
}

function Client({ tows }) {
  return (
    <SectionList>
      {!!tows &&
        tows.length > 0 &&
        tows.map(({ _id, supplierID, serviceIDs }) => {
          return (
            <ContainerList key={_id}>
              <ContainerElement>{supplierID.name}</ContainerElement>
              <ContainerStar>
                <Stars services={serviceIDs} />
              </ContainerStar>
              <ContainerElement>
                {`${serviceIDs.length} servicio${
                  serviceIDs.length === 1 ? '' : 's'
                }`}
              </ContainerElement>
              <ContainerElement>
                <Photo src={supplierID.photo} alt={supplierID.name}></Photo>
              </ContainerElement>
              <ContainerElement>
                <Button color="primary" onClick={createService}>
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
