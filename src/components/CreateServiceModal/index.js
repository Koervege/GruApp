import Swal from 'sweetalert2';
import { createService } from '../../store/servicesReducer';

export default function ModalService(towID, dispatch, userFront) {
  return function () {
    (async () => {
      const { value: formValues } = await Swal.fire({
        title: 'Crea tu servicio',
        html: `
            <input id="swal-input1" placeholder="Inicio" class="swal2-input"> 
            <input id="swal-input2" placeholder="Destino" class="swal2-input">
            <input type="date" id="swal-input3" class="swal2-input">
          `,
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
          ];
        },
      });

      if (formValues) {
        console.log(formValues)
      }
    })();
  };
}
