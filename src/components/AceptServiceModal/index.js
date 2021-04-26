import Swal from 'sweetalert2';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { updateService } from '../../store/servicesReducer';

export default function AceptService(_id, tow, date, hour, cost, index, dispatch) {
  const dateArr = date.split('-');
  const newDate = new Date(dateArr[0], dateArr[1], dateArr[2]);
  const dateFormat = format(newDate, 'PPPP', { locale: es });

  Swal.fire({
    title: '¡Aceptado!',
    iconHtml: `<img src=${tow.supplierID.photo} 
        style="width:105px; height:105px; border-radius:50%;"; 
        alt="${tow.supplierID.name}">`,
    html: `
      <p style="display:block;">Conductor: ${tow.supplierID.name}</p>
      <p style="display:block;">Placa de la grúa: ${tow.plateNum}</p>
      <p style="display:block;">Fecha: ${dateFormat}</p>
      <p style="display:block;">Hora: ${hour}</p>
      <p style="display:block;">Valor del servicio: ${cost / 1000}.000 COP</p>

    `,
    showCancelButton: true,
    focusConfirm: false,
    cancelButtonText: 'Cerrar',
    confirmButtonText: `Confirmar`,
  }).then((result) => {
    if (result.isConfirmed) {
      const dataUpdate = { servStat: 'Confirmado' };
      dispatch(updateService(_id, dataUpdate, index));

      Swal.fire({
        icon: 'success',
        title: 'Confirmado',
        text: `El servicio ha sido confirmado a ${tow.supplierID.name}`,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Cerrar',
      });
    }
  });
}
