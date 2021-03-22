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

function Stars({ services }) {
  let count = '';
  const rating = services.map((service) => count += service.rating) / services.length;

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
        tows.map(({ _id, supplier, serviceIds }) => {
          return (
            <ContainerList key={_id}>
              <ContainerElement>{supplier.name}</ContainerElement>
              <ContainerStar>
                <Stars services={serviceIds} />
              </ContainerStar>
              <ContainerElement>
                {`${serviceIds.length} servicio${serviceIds.length === 1 ? '' : 's'}`}
                </ContainerElement>
              <ContainerElement>
                <Photo
                  src={supplier.photo}
                  alt={supplier.name}
                ></Photo>
              </ContainerElement>
            </ContainerList>
          );
        })}
    </SectionList>
  );
}

export default Client;
