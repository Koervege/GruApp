import Swal from 'sweetalert2';
import { updateService } from '../../store/servicesReducer';

export default function AddInformation(_id, tow, index, dispatch) {
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
        text: `Fue un placer haberte ayudado, esperamos que sigas utilizando nuestros servicios`,
        confirmButtonText: 'Gracias!',
      });
    }
  })();
}