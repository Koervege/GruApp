import Swal from 'sweetalert2';
import { updateService } from '../../store/servicesReducer';

export default function CancelService(_id, index, name, dispatch) {
  Swal.fire({
    icon: 'warning',
    iconColor: 'red',
    title: '¿Quieres cancelar el servicio?',
    text: `Si cancelas el servicio con ${name}, no lo podrás revertir`,
    showDenyButton: true,
    showCancelButton: true,
    showConfirmButton: false,
    denyButtonText: `Cancelar`,
    cancelButtonText: `Cerrar`,
  }).then((result) => {
    if (result.isDenied) {
      const dataUpdate = { servStat: 'Cancelado' };
      dispatch(updateService(_id, dataUpdate, index));

      Swal.fire({
        icon: 'success',
        title: 'Cancelado',
        text: `El servicio con ${name} fue cancelado exitosamente`,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Cerrar',
      });
    }
  });
}
