import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

function Stars({ tows, services, supplierid }) {
  const [tow] = tows.filter((tow) => supplierid === tow.supplierID);

  const [service] = services.filter((service) => tow._id === service.towID);

  return (
    <section>
      {Array.from({ length: Math.floor(service.rating) }, (e, i) => (
        <div key={i} className="star">
          <FontAwesomeIcon icon={faStar} />
        </div>
      ))}
      {Array.from({ length: Math.ceil(5 - service.rating) }, (e, i) => (
        <div key={i} className="empty">
          <FontAwesomeIcon icon={emptyStar} />
        </div>
      ))}
    </section>
  );
}

function Client({ suppliers, tows, services }) {
  return (
    <section>
      {!!suppliers &&
        suppliers.length > 0 &&
        suppliers.map(({ _id, photo, name }) => {
          return (
            <article key={_id} className="onlySupplier">
              <p className="containerElement">{name}</p>
              <div className="containerElement">
                <Stars tows={tows} supplierid={_id} services={services} />
              </div>
              <p className="containerElement">1 servicio</p>
              <img className="containerElement" src={photo} alt={name}></img>
            </article>
          );
        })}
    </section>
  );
}

export default Client;
