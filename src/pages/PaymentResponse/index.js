import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';
import Button from '../../components/Button';
import axios from 'axios';
import { Background } from '../../components/Background';
import Frame from '../../components/Frame';
import { StyledFieldset, Legend } from '../Register/styles';
import { Container } from '../../components/StyledInput/index';
import Img from '../../components/Img';
import logo from '../../images/logo.png';
import swal from 'sweetalert';

function PaymentResponse() {

  const [data, setData] = useState({});
  
  const history = useHistory();

  const location = useLocation();

  useEffect(() => {
    const { ref_payco } = queryString.parse(location.search);
    
    axios({
      method: 'GET',
      baseURL: 'https://secure.epayco.co',
      url:`/validation/v1/reference/${ref_payco}`, 
    })
      .then(({ data }) => {
        setData(data.data);
      })
      .catch( error => {
        swal({
          title: 'Error en el pago',
          text:
          'Epayco no ha podido procesar la transacción',
          icon: 'error',
        });
      })
  }, [location]);

  const {
    x_response, 
    x_amount, 
    x_description, 
    x_fecha_transaccion,
    x_currency_code,
    x_cardnumber,
    x_ref_payco,
    x_cod_respuesta,
    x_id_factura,
    x_quotas,
    } = data;

  const handleClick = async() => {
    if( x_cod_respuesta === 1  ) {
      try {
        const token = localStorage.getItem('token');
        
        await axios({
          method: 'PUT',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: `/services/${ x_id_factura }`,
          data: {
            servStat: "Pagado",
            paymentDate: `${ x_fecha_transaccion }`,
            epaycoRef: x_ref_payco,
            quotas: `${ x_quotas }`,
            epaycoResponse: `${ x_response }`,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } catch (error) {
        swal({
          title: 'Conexion con Base de datos fallida',
          text:
          'Verifique estado de conexion',
          icon: 'error',
        });
      }
    }  

    history.push(`/Listmotorcycle/`);
  }


  return (
    <Background>
      <Frame>
        <Container>
          <Img src={logo} radius="100" width="100" height="100" alt="logo" />
        </Container>
        <StyledFieldset>
        <Legend>Resumen Pago Electronico</Legend>
          <p><b>Resultado transaccion: </b>{ x_response }</p>
          <p><b>Factura No: </b>{ x_id_factura }</p>
          <p><b>Ref. Epayco: </b>{ x_ref_payco }</p>
          <p><b>Fecha de pago: </b>{ x_fecha_transaccion }</p>
          <p><b>Servicio de grua: </b>{ x_description }</p>
          <p><b>Valor: </b>{ x_amount } { x_currency_code }</p>
          <p><b>Nro. Cuotas: </b>{ x_quotas }</p>
          <p><b>Tarjeta Nro: </b>{ x_cardnumber }</p>
        </StyledFieldset>
        <Button onClick={ handleClick } color="primary">Aceptar</Button>
      </Frame>
    </Background>
  )
}

export default PaymentResponse;
