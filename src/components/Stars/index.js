import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { StarSolid, StarEmpty, ContainerFonts } from './styles';

export default function Stars({ services }) {
  let count = 0;
  let serviceDone = '';
  let rating = services.map((service) => service.rating);
  for (let i = 0; i < rating.length; i++) {
    if (rating[i]) {
      count = count + rating[i];
      serviceDone++;
    }
  }
  if(count === '') {
    return (
      <ContainerFonts>
        <FontAwesomeIcon icon={faTruckPickup} />
      </ContainerFonts>
    )
  } else {
    return (
      <ContainerFonts>
        {Array.from({ length: Math.floor(count / serviceDone) }, (e, i) => (
          <StarSolid key={i}>
            <FontAwesomeIcon icon={faStar} />
          </StarSolid>
        ))}
        {Array.from({ length: Math.ceil(5 - count / serviceDone) }, (e, i) => (
            <StarEmpty key={i}>
              <FontAwesomeIcon icon={emptyStar} />
            </StarEmpty>
          )
        )}
      </ContainerFonts>
    );
  };
};
