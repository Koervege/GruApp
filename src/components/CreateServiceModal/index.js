import Swal from 'sweetalert2';
import logo from '../../logo.png';
import { createService } from '../../store/servicesReducer';

export default async function ModalService(towID, dispatch, userFront, name) {

    return (async () => {
      const { value: formValues } = await Swal.fire({
        iconHtml: `<img src=${logo} 
          style="width:150px; height:150px; border-radius:50%;" 
          alt="GruApp logo">`,
        confirmButtonText: 'Solicitar',
        title: 'Crea tu servicio',
        html: `
            <input id="swal-input1" placeholder="Inicio" class="swal2-input"> 
            <input id="swal-input2" placeholder="Destino" class="swal2-input">
            <label for="checkbox">¿Ingresar Inicio y Destino en mapa?</label>
            <input id="checkbox" type="checkbox">
            <input type="date" id="swal-input3" class="swal2-input">
          `,
        focusConfirm: false,
        footer: `El conductor ${name} te prestará el servicio.`,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value,
            document.getElementById('swal-input3').value,
            document.getElementById('checkbox').checked,
          ];
        },
      });

      let isFormValid;
      formValues ? isFormValid = formValues[0] && formValues[1] && formValues[2] : isFormValid = 'close';

      if (isFormValid === 'close') return false;

      if (isFormValid && !formValues[3]) {
        const [ initLoc, finalLoc, date ] = formValues;
        const bikeID = userFront.bikeIDs[0];

        dispatch(createService(initLoc, finalLoc, date, bikeID, towID));

        Swal.fire({
          icon: 'success',
          title: 'Solicitud enviada exitosamente',
          text: `${name} te indicará la hora de recogida y el costo del servicio`,
          confirmButtonText: '¡Entendido!',
        });
        return false;
      };
      
      if (formValues[2] && formValues[3]) {
        return formValues[2];
      }
        
      
      Swal.fire({
        icon: 'warning',
        title: 'No es posible enviar la solicitud sin la información necesaria',
        confirmButtonText: '¡Entendido!',
      });

    })();
}
