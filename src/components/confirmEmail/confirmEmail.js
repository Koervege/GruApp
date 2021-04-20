import Swal from 'sweetalert2';
import logo from '../../logo.png';
import axios from 'axios';

function confirmEmail(userType, userEmail, auth, history) {

  if(!userType) return

  let emailToken = 0;

  (async() => {
    try {
      const response = await axios({
        method: 'PUT',
        baseURL: process.env.REACT_APP_SERVER_URL,
        url: '/users/',
        data: {
          userType,
          email: userEmail,
        },
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      emailToken = response.data.emailToken
    } catch(err) {
      await Swal.fire({ icon:'error', title:'Ocurrió un error, por favor vuelve a intentarlo más tarde'})
    }
  })();

  let confirmationSuccessful = false;

  (async () => {
    await Swal.fire({
      title: 'Confirma tu correo',
      iconHtml: `<img src=${logo} style="width:170px;height:150px;radius:100px; alt="GruApp logo">`,
      html:
            `
              <p>Te hemos enviado un correo con un PIN de confirmación. ¡Recuerda revisar en tu carpeta de Spam!<p>
              <input id="Token" placeholder="Tu PIN" class="swal2-input" required="required" >
            `,
      showDenyButton: true,
      denyButtonText: 'Volver al inicio',
      confirmButtonText: 'Verificar',
      focusConfirm: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      preDeny: () => {
        localStorage.removeItem('token');
        history.push('/');
      },
      preConfirm: 
        async () => {
          const input = document.getElementById('Token').value
          let response
          if(input == emailToken) {
            return (async () => {
              try {
                response = await axios({
                  method: 'PUT',
                  baseURL: process.env.REACT_APP_SERVER_URL,
                  url: '/users/confirm',
                  data: {
                    userType,
                    emailToken: input,
                  },
                  headers: {
                    Authorization: `Bearer ${auth}`,
                  },
                });
                if(response.status == 200) {
                  confirmationSuccessful = true;
                  return true;
                } else return false;
              } catch {
                await Swal.fire({ icon:'error', title:'Ocurrió un error, por favor vuelve a intentarlo más tarde'})
              };
            })();
          } else return false;
        },
    });

    if(confirmationSuccessful) {
      await Swal.fire({ icon: 'success', title: '¡Confirmado!'})
    };
  })();
}

export default confirmEmail;
