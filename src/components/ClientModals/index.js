import Swal from 'sweetalert2';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { updateService } from '../../store/servicesReducer';

export function CancelService( _id, index, name, dispatch ) {
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

export function AceptService( _id, tow, date, hour, cost, index, dispatch ) {
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
};

export function AddInformation(_id, tow, index, dispatch) {
  (async () => {
    const { value: formValues } = await Swal.fire({
      iconHtml: `<img src=${tow.supplierID.photo} 
        style="width:105px; height:105px; border-radius:50%;";  
        alt="${tow.supplierID.name}">`,
      confirmButtonText: 'Calificar',
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: 'Cerrar',
      title: 'Califica el servicio',
      html: `
        <style>
          input[type="radio"] {
            display: none;
          }

          label {
            color: grey;
          }

          .clasificacion {
            direction: rtl;
            unicode-bidi: bidi-override;
          }

          label:hover,
          label:hover ~ label {
            color: orange;
          }

          input[type="radio"]:checked ~ label {
            color: orange;
          }
        </style>
        <form name="rating">
          <p class="clasificacion">
            <input id="radio1" type="radio" name="estrellas" value="5">
            <label for="radio1">★</label>
            <input id="radio2" type="radio" name="estrellas" value="4">
            <label for="radio2">★</label>
            <input id="radio3" type="radio" name="estrellas" value="3">
            <label for="radio3">★</label>
            <input id="radio4" type="radio" name="estrellas" value="2">
            <label for="radio4">★</label>
            <input id="radio5" type="radio" name="estrellas" value="1">
            <label for="radio5">★</label>
          </p>
          <input id="swal-input2" type:"textarea" placeholder="Escribe tu comentario del servicio" class="swal2-input">
        </form>
        `,
      preConfirm: () => {
        return [
          document.rating.estrellas.value,
          document.getElementById('swal-input2').value,
        ];
      },
    });

    if (formValues) {
      const rating = formValues[0];
      const comments = formValues[1];
      console.log(rating);
      console.log(comments);

      const dataUpdate = { servStat: 'Calificado', rating, comments };
      dispatch(updateService(_id, dataUpdate, index));

      Swal.fire({
        icon: 'success',
        title: 'Ha finalizado el servicio',
        text: `Fue un placer haberte servido, continúa usando nuestros servicios`,
        confirmButtonText: 'Entendido!',
      });
    }
  })();
}