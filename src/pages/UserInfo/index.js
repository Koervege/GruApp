import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.png';
import Frame from '../../components/Frame';
import Button from '../../components/Button';
import Img from '../../components/Img';
import MotoInfo from '../../components/MotoInfo';
import TowInfo from '../../components/TowInfo';
import { StyledInput, Container } from '../../components/StyledInput/index';
import { ImgUser } from "./styles";
import { StyledFieldset, Legend } from "../Register/styles";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import confirmEmail from '../../components/confirmEmail/confirmEmail';
import swal from 'sweetalert';
import { Background } from '../../components/Background/index';
import { getLoggedUser } from '../../store/usersReducer';


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
    if (name === 'photo') {
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
        swal("¡Advertencia!", "Aún no posee vehículos registrados. Al ingresar uno podrás disfrutar de todos los beneficios de GruApp.", "info")
      }
    }
  }

  useEffect(() => {
    if(!userFront.name) {
      dispatch(getLoggedUser(history));
    };
    setState(prevState =>({
      ...prevState,
      phoneNum: userFront.phoneNum,
      name: userFront.name,
    }));
    getVehiInfo();
    if(!userFront.emailIsConfirmed) {
      confirmEmail(userType, userFront.email, localStorage.getItem('token'));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userType, userFront.name])

  const eraseUser = async(event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

    try {
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
    } catch (error) {
      swal("¡Lo sentimos!", "No fué posible eliminar el usuario", "erro")
    }
  }; 

  const updateUser = async(event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const dataUser = new FormData();
    dataUser.append('name', state.name);
    dataUser.append('phoneNum', state.phoneNum);
    if(state.photo) {
      dataUser.append('photo', state.photo, state.photo.name)
    }
    
    try {
      await axios({
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
    } catch (error) {
      swal("¡Opps!", "Algo salió mal. No se pudo actualizar", "error")
    }
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

    try {
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
      swal("¡Buen trabajo!", `${vehicleType} actualizada con éxito`, "success")
    } catch (error) {
      swal("¡No fué posible!", 'Debes tener un vehículo agregado', "error")
    }
  };

  const createVehi = async(event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');

    try {
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
      swal("¡Buen trabajo!", `${vehicleType} creada con éxito`, "success");
    } catch (error) {
      swal("¡Lo sentimos!", `No se pudo crear la ${vehicleType}`, "error");
    }
  }; 
  
  const accept = (event) => {
    event.preventDefault();

    if(userType === 'client') {
      history.push('/listMotorcycle/')
    } else {
      history.push('/listTow/')
    };
  };

    const { name, phoneNum, brand, cc, capacity, plateNum, type, weight, image, vehicleType, editUser, editVehi } = state;

    return (
      <Background>
      <Frame>
        <Container>
          <Img src={logo} radius="100" width="100" height="100" alt="logo" />
        </Container>

        <form onSubmit={createVehi}> 
        <StyledFieldset>
          <Legend>Usuario</Legend>
          <label htmlFor="editUser">
            <input type="checkbox" id="editUser" name="editUser" onChange={handleEdit} checked={editUser}/>
            Editar
          </label>
          <StyledInput
            value={name ? name : ''}
            name="name"
            onChange={handleChange}
            children="Nombre"
            type="text"
            disabled={!editUser}
          />
          <StyledInput
            value={phoneNum ? phoneNum : ''}
            name="phoneNum"
            onChange={handleChange}
            children="Telefono"
            type="tel"
            disabled={!editUser}
          />
          <StyledInput
            name="photo"
            onChange={handleChange}
            children="Foto perfil"
            type="file"
            accept="image/*"
            id="photo"
            disabled={!editUser}
          />
          <Container>
            {image && <ImgUser src={image} alt="profile preview" />}
          </Container>
          <Container>
            {editUser && <Button type="submit" color="success" onClick={updateUser}>Actualizar Usuario</Button>}
            <Button type="button" color="danger" onClick={eraseUser}>Borrar Usuario</Button>
          </Container>
        </StyledFieldset>
      
        {(<StyledFieldset>
          <Legend>{vehicleType}</Legend>  
          <label htmlFor="editVehi">
            <input type="checkbox" id="editVehi" name="editVehi" onChange={handleEdit} checked={editVehi}/>
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
          <Container>
            <Button type="submit" color="primary" >Agregar {vehicleType}</Button>
          { editVehi && plateNum && <Button type="submit" color="success" onClick={updateVehi}>Actualizar {vehicleType}</Button>}
          </Container>
        </StyledFieldset>)}
        <Container>
          <Button type="submit" color="primary" onClick={accept} >Aceptar</Button>
        </Container>
        </form>
      </Frame>
      </Background>
    );
  
}

export default UserInfo;