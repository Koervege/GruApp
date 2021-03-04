import './styles.css';
import ListMotorcycle from '../../pages/ListMotorcycle';

function Client({ _id, name, photo, tows, services }) {
  return (
    <div className="Client">
      <h1>Francisco Villa</h1>
      <h3>
        <ListMotorcycle />
      </h3>
      <p>1 servicio</p>
      <img
        src="https://res.cloudinary.com/djugjzinn/image/upload/v1612582362/aapktdqebpjhzflqlgw4.jpg"
        alt="Tow"
      />
    </div>
  );
}

export default Client;
