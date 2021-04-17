
import { BoxSupplier } from '../ListMotorcycle/styles';
import Provider from '../../components/Provider';
import Button from '../../components/Button';
import NavBar from '../../components/NavBar';
import axios from 'axios';

function ListTow() {
  const dispatch = useDispatch();
  const { loading, services, userID,errorServices, userFront } = useSelector(({ servicesReducer, usersReducer }) => ({
      services: servicesReducer.services,
      userID: servicesReducer.userID,
      errorServices: servicesReducer.errorServices,
      userFront: usersReducer.userFront,
  }));
 

  useEffect(() => {
    dispatch(getServices());

  },[]);

  const [isTowActive, setIsTowActive] = useState(
    userFront && 
    userFront.towIDs && 
    userFront.towIDs[0] ? userFront.towIDs[0].status : true );
  
  const handleActive = async (e) => {

    const { plateNum } = userFront.towIDs[0];
    const value = e.target.checked;
    const token = localStorage.getItem('token');
    const dataUser = new FormData();
    dataUser.append('status', value);
    dataUser.append('plateNum', plateNum);
    
    try {
      await axios({
        method: 'PUT',
        baseURL:process.env.REACT_APP_SERVER_URL,
        url: '/tows',
        data: dataUser,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        } 
      })
      const msg = value ? 'en operación' : 'fuera de operacion'; 
      swal("Status Actualizado", `Grua de placas ${ plateNum } esta ${ msg } ` , "success");
      setIsTowActive(value);
    } catch (error) {
      swal("¡Opps!", "Algo salió mal. No se pudo actualizar", "error")
    }
  }

  let history = useHistory();
  
  if(loading) return <p>loading...</p>
  if (errorServices) {
    localStorage.removeItem('token');
    history.push('/login');
    swal({
      title: 'Algo salió mal!',
      text:
        'Por favor, ingresa de nuevo a la aplicación con tu usuario y contraseña.',
      icon: 'error',
    });

    dispatch(deleteError());
  }
  

  return (
    
    <section>
      <NavBar/>
      <BoxSupplier>
        <label htmlFor="towStatus">
          <input 
            type="checkbox" 
            id="towStatus" 
            name="towStatus"
            onChange={ handleActive }
            checked={ isTowActive }  />
              {
                isTowActive? 'Activo' : 'Inactivo'
              }
        </label>
        <Button color="primary">Ha ganado XX.XXX COP</Button>
        <Provider/>
        <Button color="success">Servicio en proceso</Button>
      </BoxSupplier>
    </section>
  );
}

export default ListTow;
