import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Photo,
  ContainerList,
  ContainerElement,
  SectionList,
} from '../Provider/styles';
import { ContainerStar, StarSolid, StarEmpty } from './styles';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

function Stars({ tows, services, supplierid }) {
  const [tow] = tows.filter((tow) => supplierid === tow.supplierID);

  const [service] = services.filter((service) => tow._id === service.towID);

  return (
    <section>
      {Array.from({ length: Math.floor(service.rating) }, (e, i) => (
        <StarSolid key={i}>
          <FontAwesomeIcon icon={faStar} />
        </StarSolid>
      ))}
      {Array.from({ length: Math.ceil(5 - service.rating) }, (e, i) => (
        <StarEmpty key={i}>
          <FontAwesomeIcon icon={emptyStar} />
        </StarEmpty>
      ))}
    </section>
  );
}

function Client({ suppliers, tows, services }) {
  return (
    <SectionList>
      {!!suppliers &&
        suppliers.length > 0 &&
        suppliers.map(({ _id, photo, name }) => {
          return (
            <ContainerList key={_id}>
              <ContainerElement>{name}</ContainerElement>
              <ContainerStar>
                <Stars tows={tows} supplierid={_id} services={services} />
              </ContainerStar>
              <ContainerElement>1 servicio</ContainerElement>
              <ContainerElement>
                <Photo src={photo} alt={name}></Photo>
              </ContainerElement>
            </ContainerList>
          );
        })}
    </SectionList>
  );
}

export default Client;
