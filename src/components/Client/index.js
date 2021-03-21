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

function Stars({ rating }) {
  
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

function Client({ services }) {
  return (
    <SectionList>
      {!!services &&
        services.length > 0 &&
        services.map(({ _id, rating, towID }) => {
          return (
            <ContainerList key={_id}>
              <ContainerElement>{towID.supplier.name}</ContainerElement>
              <ContainerStar>
                <Stars rating={rating} />
              </ContainerStar>
              <ContainerElement>1 servicio</ContainerElement>
              <ContainerElement>
                <Photo
                  src={towID.supplier.photo}
                  alt={towID.supplier.name}
                ></Photo>
              </ContainerElement>
            </ContainerList>
          );
        })}
    </SectionList>
  );
}

export default Client;
