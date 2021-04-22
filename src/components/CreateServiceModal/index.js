import Swal from 'sweetalert2';
import logo from '../../logo.png';
import { createService } from '../../store/servicesReducer';

export default function ModalService(towID, dispatch, userFront, name) {
  return function () {
    (async () => {
      const { value: formValues } = await Swal.fire({
        iconHtml: `<img src=${logo} 
          style="width:150px; height:150px; border-radius:50%; 
          alt="GruApp logo">`,
        confirmButtonText: 'Solicitar',
        title: 'Crea tu servicio',
        html: `
            <input id="swal-input1" placeholder="Inicio" class="swal2-input"> 
            <input id="swal-input2" placeholder="Destino" class="swal2-input">
            <input type="date" id="swal-input3" class="swal2-input">
          `,
        focusConfirm: false,
        footer: `El conductor ${name} te prestará el servicio.`,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
          ];
        },
      });

      if (formValues) {
        const initLoc = formValues[0];
        const finalLoc = formValues[1];
        const date = formValues[2];
        const bikeID = userFront.bikeIDs[0];

        dispatch(createService(initLoc, finalLoc, date, bikeID, towID));

        Swal.fire({
          icon: 'success',
          title: 'Solicitud',
          text: `${name} te indicará la hora de recogida y el costo del servicio`,
          confirmButtonText: 'Entendido!',
        });
      }
    })();
  };
}
