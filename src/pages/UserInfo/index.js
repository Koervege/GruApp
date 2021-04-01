import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import MotoInfo from '../../components/MotoInfo';
import TowInfo from '../../components/TowInfo';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { StyledLink, StyledFieldset } from "./styles";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function UserInfo() {
  let history = useHistory();
  const [state, setState] = useState(
    {
      name: '',
      phoneNum:'',
      brand:'',
      cc:'',
      capacity:'',
      plateNum:'',
      type:'',
      weight:'',
      photo: '',
      vehiPhoto: '',
      vehicleType:'',
      edit: false,
      editVehi: false,
      hideInfo: true,
      userType:'supplier',
      userId:'60651ab0c407935cc4a51f94',
      error: null,
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = (e) => {
    setState(prevState =>({
      ...prevState,
      edit: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
      editVehi: !state.editVehi,
    }));
  }

  const getVehiInfo = async() => {
    const { userId, userType } = state
    try {
      const { data } = await axios({
        method: 'GET',
        baseURL:process.env.REACT_APP_SERVER_URL,
        url: `/${userType}s?_id=${userId}`
      })
      console.log(data);
      if (userType === 'client') {
        if (data.clients[0].bikeIDs[0]) {
          const { brand, cc, type, plateNum, weight } = data.clients[0].bikeIDs[0];
          setState(prevState =>({ ...prevState, brand, cc, type, plateNum, weight }))
        }
        setState(prevState =>({ ...prevState, vehicleType: 'Moto'}))
      } else {
        if (data.suppliers[0].towIDs[0]) {
          const { brand, capacity, plateNum} = data.suppliers[0].towIDs[0];
          setState(prevState =>({ ...prevState, brand, capacity, plateNum, hideInfo: false, }))
        }
        setState(prevState =>({ ...prevState, vehicleType: 'Grúa'}))
      }
    } catch (error) {
      console.log(error, 'No posee vehiculos registrados');
    }
  }
  
  useEffect(()=>{
    const token = localStorage.getItem('token');
    axios({
      method: 'GET',
      baseURL:process.env.REACT_APP_SERVER_URL,
      url: `/users`,
      headers: {
        Authorization: `Bearer ${token}`,
      } 
    })
    .then(({ data }) => {
      setState(prevState =>({
        ...prevState,
        userType: data.userType,
        userId: data.userFront._id,
        phoneNum: data.userFront.phoneNum,
        name: data.userFront.name,
      }));
    })
    .catch(error => {
      setState(prevState =>({
        ...prevState,
        error,
      }));
    })
  }, [])
  
  useEffect(() => {
    getVehiInfo()
  },[state.userId])

  const eraseUser = async(event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const userType = state.userType;

    await axios({
      method: 'DELETE',
      baseURL:process.env.REACT_APP_SERVER_URL,
      url: `/${userType}s`,
      headers: {
        Authorization: `Bearer ${token}`,
      } 
    })
    history.push(`/login/`);
    localStorage.clear();
  }; 

  const sendInfo = async(event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const userType = state.userType;
    const dataUser = new FormData();
    dataUser.append('name', state.name);
    dataUser.append('phoneNum', state.phoneNum);
    if (state.edit) {
      const { data } = await axios({
        method: 'PUT',
        baseURL:process.env.REACT_APP_SERVER_URL,
        url: `/${userType}s`,
        data: dataUser,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        } 
      })
      alert(data.message)
      const dataMoto = new FormData();
      dataMoto.append('brand', state.brand);
      dataMoto.append('cc', state.cc);
      dataMoto.append('type', state.type);
      dataMoto.append('plateNum', state.plateNum);
      dataMoto.append('weight', state.weight);
      const dataTow = new FormData();
      dataTow.append('brand', state.brand);
      dataTow.append('capacity', state.capacity);
      dataTow.append('plateNum', state.plateNum);
      dataTow.append('status', true);
      await axios({
        method : 'PUT',
        baseURL:process.env.REACT_APP_SERVER_URL,
        url: userType === 'client' ? '/motorcycles' : '/tows',
        data: userType === 'client' ? dataMoto : dataTow,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        } 
      })
    } else {
      await axios({
        method: 'POST',
        baseURL:process.env.REACT_APP_SERVER_URL,
        url: userType === 'client' ? '/motorcycles' : '/tows',
        data: userType === 'client' ? 
          {
            brand: state.brand,
            cc: state.cc,
            type: state.type,
            plateNum: state.plateNum,
            weight: state.weight,
          }
          : 
          {
            brand: state.brand,
            capacity: state.capacity,
            plateNum: state.plateNum,
            status: true,
          },
        headers: {
          Authorization: `Bearer ${token}`,
        } 
      })
      alert('vehiculo creador')
    }
  }; 

    const { name, phoneNum, brand, cc, capacity, plateNum, type, weight, photo, vehiPhoto, vehicleType, edit, editVehi } = state;

    return (
      <Frame>
        <Container>
          <Img src={logo} radius="100" width="100" height="100" alt="logo" />
        </Container>

        <form onSubmit={sendInfo}>
        <StyledInput
            name="edit"
            onChange={handleEdit}
            children="Editar"
            type="checkbox"
            checked={edit}
          />
        <StyledFieldset>
          <legend>Usuario</legend>
          <StyledInput
            value={name}
            name="name"
            onChange={handleChange}
            children="Nombre"
            type="text"
            disabled={!edit}
          />
          <Button type="button" color="danger" onClick={eraseUser}>Borrar Usuario</Button>
          <StyledInput
            value={phoneNum}
            name="phoneNum"
            onChange={handleChange}
            children="Telefono"
            type="tel"
            disabled={!edit}
          />
          <StyledInput
            value={photo}
            name="photo"
            onChange={handleChange}
            children="Foto perfil"
            type="text"
            disabled={!edit}
          />
        </StyledFieldset>
        { !plateNum && 
        <Button type='button' color='success' onClick={() => setState(prevState =>({...prevState, hideInfo:false, editVehi:true}))}>
          {vehicleType === 'Moto'? 'Agregar Moto': 'Agregar Grúa'}
        </Button>
        }
        {(<StyledFieldset>
          <legend>{vehicleType}</legend>
          {
            vehicleType === 'Moto'? 
              (
                <MotoInfo
                  brand={brand}
                  cc={cc}
                  type={type}
                  plateNum={plateNum}
                  weight={weight}
                  onChange={handleChange}
                  edit={!editVehi}
                />
              ) 
              : 
              (
                <TowInfo
                  brand={brand}
                  capacity={capacity}
                  plateNum={plateNum}
                  onChange={handleChange}
                  edit={!editVehi}
                />
              )
          }
          <StyledInput
            value={vehiPhoto}
            name="vehiPhoto"
            onChange={handleChange}
            children="Foto vehículo "
            type="text"
            disabled={!editVehi}
          />  
        </StyledFieldset>)}
          <Container>
            <Button type="submit" color="primary">
              Aceptar
            </Button>
            <StyledLink to="/">Cancelar</StyledLink>
          </Container>
        </form>
      </Frame>
    );
  
}

export default UserInfo;