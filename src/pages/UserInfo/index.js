import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import MotoInfo from '../../components/MotoInfo';
import TowInfo from '../../components/TowInfo';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { StyledLink, StyledFieldset,ImgUser } from "./styles";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import swal from 'sweetalert';



function UserInfo() {

  const dispatch = useDispatch();
  let history = useHistory();
  const { userType, userFront } = useSelector(({ usersReducer }) => ({
    userType: usersReducer.userType,
    userFront: usersReducer.userFront,
  }));

  const [state, setState] = useState(
    {
      name:'',
      phoneNum:'',
      brand:'',
      cc:'',
      capacity:'',
      plateNum:'',
      type:'',
      weight:'',
      photo: null,
      vehiPhoto: null,
      image: null,
      vehicleType:'',
      editUser: false,
      editVehi: true,
      error: null,
    }
  );

  function readFile(file) {
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = e => setState(prevState =>({ ...prevState, image: e.target.result}))
    reader.onerror = e => console.log(reader.error)
  }

  const handleChange = (event) => {
    let { name, value } = event.target;
    if (name === 'photo' || name === 'vehiPhoto') {
      value = event.target.files[0]
      readFile(event.target.files[0])
    }
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = (e) => {
    setState(prevState =>({
      ...prevState,
      editUser: e.target.name === 'editUser' ? !editUser : editUser,
      editVehi: e.target.name === 'editVehi' ? !editVehi : editVehi,
    }));
  }

  const getVehiInfo = async() => {
    if(userType) {
      const userId = userFront._id
      try {
        const { data } = await axios({
          method: 'GET',
          baseURL:process.env.REACT_APP_SERVER_URL,
          url: `/${userType}s?_id=${userId}`
        })
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
  }

  useEffect(() => {
    setState(prevState =>({
      ...prevState,
      phoneNum: userFront.phoneNum,
      name: userFront.name,
    }));
    getVehiInfo()
  },[userType])

  const eraseUser = async(event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

    await axios({
      method: 'DELETE',
      baseURL:process.env.REACT_APP_SERVER_URL,
      url: `/${userType}s`,
      headers: {
        Authorization: `Bearer ${token}`,
      } 
    })
    swal("¡Gracias por visitarnos!", "Usuario eliminado satisfacctoriamente", "info")
    history.push(`/login/`);
    localStorage.clear();
  }; 

  const updateUser = async(event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const dataUser = new FormData();
    dataUser.append('name', state.name);
    dataUser.append('phoneNum', state.phoneNum);
    console.log(state.photo);
    if(state.photo) {
      dataUser.append('photo', state.photo, state.photo.name)
    }
    
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
    swal("¡Buen trabajo!", "Usuario actualizado satisfacctoriamente", "success")
  }; 

  const updateVehi = async(event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
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
    .then(() => {
      swal("¡Buen trabajo!", `${vehicleType} actualizada con éxito`, "success")
    })
    .catch(err => {
      swal("¡No fué posible!", 'Debes tener un vehículo agregado', "error")
    })
  };

  const createVehi = async(event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

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
    swal("¡Buen trabajo!", `${vehicleType} creada con éxito`, "success")
  }; 
  
  const accept = (event) => {
    event.preventDefault();

    if(userType === 'client') {
      history.push('/listMotorcycle/')
    } else {
      history.push('/listTow/')
    }
  };

    const { name, phoneNum, brand, cc, capacity, plateNum, type, weight, image, vehiPhoto, vehicleType, editUser, editVehi } = state;

    return (
      <Frame>
        <Container>
          <Img src={logo} radius="100" width="100" height="100" alt="logo" />
        </Container>

        <form onSubmit={createVehi}> 
        <StyledFieldset>
          <legend>Usuario</legend>
          <label htmlFor="editUser">
            <input type="checkbox" defaultChecked="true" id="editUser" name="editUser" onChange={handleEdit} checked={editUser}/>
            Editar
          </label>
          <StyledInput
            value={name}
            name="name"
            onChange={handleChange}
            children="Nombre"
            type="text"
            disabled={!editUser}
          />
          <StyledInput
            value={phoneNum}
            name="phoneNum"
            onChange={handleChange}
            children="Telefono"
            type="tel"
            disabled={!editUser}
          />
          <StyledInput
            //value={photo}
            name="photo"
            onChange={handleChange}
            children="Foto perfil"
            type="file"
            accept="image/*"
            id="photo"
            disabled={!editUser}
          />
          {image && <ImgUser src={image} width="75" height="75" alt="profile preview" />}
          <Container>
            <Button type="button" color="danger" onClick={eraseUser}>Borrar Usuario</Button>
            {editUser && <Button type="submit" color="success" onClick={updateUser}>Actualizar Usuario</Button>}
          </Container>
        </StyledFieldset>
      
        {(<StyledFieldset>
          <legend>{vehicleType}</legend>  
          <label htmlFor="editVehi">
            <input type="checkbox" defaultChecked="true" id="editVehi" name="editVehi" onChange={handleEdit} checked={editVehi}/>
            Editar
          </label>
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
            children="Foto vehículo"
            type="file"
            accept="image/*"
            disabled={!editVehi}
          />
          <Container>
            <Button type="submit" color="primary" >Agregar {vehicleType}</Button>
          { editVehi && plateNum && <Button type="submit" color="success" onClick={updateVehi}>Actualizar {vehicleType}</Button>}
          </Container>
        </StyledFieldset>)}
        <Container>
          <Button type="submit" color="primary" onClick={accept} >Aceptar</Button>
          <StyledLink to="/">Cancelar</StyledLink>
        </Container>
        </form>
      </Frame>
    );
  
}

export default UserInfo;