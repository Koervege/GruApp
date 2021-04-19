import Swal from 'sweetalert2';
import logo from '../../logo.png';
import axios from 'axios';

function viewService(serviceStatus = 'Solicitado', clientName = 'clientillo') {

  const possibleServiceStatus = ['Solicitado', 'Aceptado', 'Confirmado', 'Inicio', 'Destino', 'Terminado', 'Pagado'];
  let currentStatus = possibleServiceStatus.indexOf(serviceStatus);
  (async () => {
    await Swal.fire({
    title: 'Detalles del servicio',
    iconHtml: `<img src=${logo} style="width:170px;height:150px;radius:100px; alt="GruApp logo">`,
    html: 
      `
        <p style="display:inline-block;">Nombre del cliente que solicitó: ${clientName}.</p>
        <p style="display:inline-block;">Estado actual del servicio ${serviceStatus}.</p>
      `,
    confirmButtonText: currentStatus === 0 ? 
      `Introducir hora y costo de servicio`
      :
      `Cambiar estado de servicio a: ${possibleServiceStatus[currentStatus + 1]}`,
    preConfirm: async () => {
      currentStatus === 0 ?
      await Swal.fire({
        title: 'Detalles del servicio',
        iconHtml: `<img src=${logo} style="width:170px;height:150px;radius:100px; alt="GruApp logo">`,
        html: 
          `
            <div>
              <label for="time">Hora del servicio</label>
              <input type="time" id="time" name="time" required></input>
            </div>
            <div>
              <label for="cost">Costo del servicio</label>
              <input type="text" id="cost" name="cost" placeholder="¿Cuánto quieres cobrar?"required></input>
            </div>
          `,
        confirmButtonText: 'Enviar',
      })
      :
      currentStatus++;
    },  
    });
  })()
}

export default viewService;
