import { BoxSupplier } from '../ListMotorcycle/styles';
import Provider from '../../components/Provider';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';

function ListTow() {

  return (
    <section>
      <NavBar/>
      <BoxSupplier>
        <Button color="primary">Ha ganado XX.XXX COP</Button>
        <Provider/>
        <Button color="success">Servicio en proceso</Button>
      </BoxSupplier>
    </section>
  );
}

export default ListTow;
