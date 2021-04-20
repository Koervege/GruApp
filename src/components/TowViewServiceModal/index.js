import Swal from 'sweetalert2';
import logo from '../../logo.png';
import { updateService } from '../../store/servicesReducer'

function towViewService(servID, serviceStatus = 'Aceptado', clientName = 'clientillo', dispatch, serviceIndex) {

  const possibleServiceStatus = ['Solicitado', 'Aceptado', 'Confirmado', 'Inicio', 'Destino', 'Terminado', 'Pagado'];
  let currentStatusIndex = possibleServiceStatus.indexOf(serviceStatus);
  let doSomething = true;
  let buttonText = '';

  switch(currentStatusIndex) {
  case 0:
    doSomething = true;
    buttonText = 'Introducir costo y hora del servicio';
    break;
  case 1:
    doSomething = false;
    buttonText = 'Ya aceptaste este servicio, espera a que el cliente confirme';
    break;
  case 5:
    doSomething = false;
    buttonText = 'Ya terminaste este servicio, espera a que el cliente pague';
    break;
  default:
    doSomething = true;
    buttonText = `Cambiar estado de servicio a: ${possibleServiceStatus[currentStatusIndex + 1]}`
  }

  (async () => {
    await Swal.fire({
    title: 'Detalles del servicio',
    iconHtml: `<img src=${logo} style="width:170px;height:150px;radius:100px; alt="GruApp logo">`,
    html: 
      `
        <p style="display:inline-block;">Nombre del cliente que solicitó: ${clientName}.</p>
        <p style="display:inline-block;">Estado actual del servicio ${serviceStatus}.</p>
      `,
    confirmButtonText: buttonText,
    showCancelButton: true,
    focusConfirm: false,
    cancelButtonText: 'Volver',
    preConfirm: doSomething ? async () => {
      currentStatusIndex === 0 ?
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
              <input type="number" id="cost" name="cost" small="¿Cuánto quieres cobrar?"required></input>
            </div>
          `,
        confirmButtonText: 'Enviar',
        preConfirm: () => {
          console.log(document.getElementById('time'), typeof(document.getElementById('time')))
          dispatch(updateService(servID, {
          hour: document.getElementById('time').value,
          cost: document.getElementById('cost').value,
          servStat: 'Aceptado',
        }, serviceIndex))},
      })
      :
      dispatch(updateService(servID, {
        servStat: possibleServiceStatus[currentStatusIndex + 1],
      }, serviceIndex))
    } : undefined,  
    });
  })()
}

export default towViewService;
