import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { StarSolid, StarEmpty } from './styles';

export default function Stars({ services }) {
  let count = '';
  let rating = services.map((service) => service.rating);
  for (let i = 0; i < rating.length; i++) {
    if (rating[i]) {
      count = count + rating[i];
    }
  }
  if (!rating) {
    rating = '0';
  }

  return (
    <section>
      {Array.from({ length: Math.floor(count) }, (e, i) => (
        <StarSolid key={i}>
          <FontAwesomeIcon icon={faStar} />
        </StarSolid>
      ))}
      {Array.from({ length: Math.ceil(5 - count) }, (e, i) => (
        <StarEmpty key={i}>
          <FontAwesomeIcon icon={emptyStar} />
        </StarEmpty>
      ))}
    </section>
  );
}
