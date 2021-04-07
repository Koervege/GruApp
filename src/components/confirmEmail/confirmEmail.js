import Swal from 'sweetalert2';
import logo from '../../logo.png';
import axios from 'axios';

function confirmEmail(userType, userEmail, auth) {

  if(!userType) return

  let emailToken = 21;

  (async() => {
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
      confirmButtonText: 'Verificar',
      focusConfirm: false,
      preConfirm: 
        async () => {
          const input = document.getElementById('Token').value
          let response
          if(input == emailToken) {
            return (async () => {
              response = await axios({
                method: 'PUT',
                baseURL: process.env.REACT_APP_SERVER_URL,
                url: '/users/',
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
