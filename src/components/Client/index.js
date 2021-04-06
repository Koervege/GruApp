import Swal from 'sweetalert2';
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
  (async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Crea tu servicio',
      html:
        '<input id="swal-input1" placeholder="Inicio" class="swal2-input">' +
        '<input id="swal-input2" placeholder="Destino" class="swal2-input">' +
        '<input type="date" id="swal-input3" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
        ];
      },
    });

    if (formValues) {
      console.log(formValues)
      Swal.fire(JSON.stringify(formValues));
    }
  })();
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
