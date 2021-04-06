import React from 'react';
import swal from '@sweetalert/with-react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import logo from '../../logo.png';
import axios from 'axios';
import { useSelector } from 'react-redux';
function confirmEmail(userType, userEmail, token) {

  let emailToken

  (async() => {
    const { data: { backendToken }} = await axios({
      method: 'PUT',
      baseURL: process.env.REACT_APP_SERVER_URL,
      url: '/users/',
      data: {
        userType,
        userEmail,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    emailToken = backendToken;
  })();

  (async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Confirma tu correo',
      iconHtml: `<img src=${logo} style="width:170px;height:150px;radius:100px; alt="GruApp logo">`,
      html:
        `
        <p>Te hemos enviado un correo con un PIN de confirmación. ¡Recuerda revisar en tu carpeta de Spam!<p>
        <input id="Token" placeholder="Tu PIN" class="swal2-input">
        `,
      confirmButtonText: 'Verificar',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('Token').value,
        ];
      },
      allowOutsideClick: false
    });

    if (formValues) {
      console.log(formValues.join())
      Swal.fire(JSON.stringify(formValues));
    }
  })();
}

export default confirmEmail;
