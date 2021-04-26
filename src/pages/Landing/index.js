import React, { useEffect, useState } from 'react';
import logo from '../../logo.png';
import LandingNavbar from '../../components/LandingNavbar/LandingNavbar';
import { Background } from '../../components/Background'
import {
  LandingMain,
  LandingH1,
  LandingP,
  LandingImg,
} from './styles';
import MapView from '../../components/MapView'

function Landing() {

  const [latitude, setLatitude ] = useState();
  const [longitude, setLongitude] = useState();
  const [address, setAddress ] = useState('');
  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError, {enableHighAccuracy: true});
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  const getCoordinates = (position) => {
    if (position.coords.latitude && position.coords.longitude) {
      setLatitude(parseFloat(position.coords.latitude));
      setLongitude(parseFloat(position.coords.longitude));
    }
  }
  
  const handleLocationError= (error) => { 
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.")
        break;
      default:
        alert("An unknown error occurred.")  
    }
  }

  useEffect(() => {
    getLocation();
  },[])

  return (
    <section className="landingContainer">
      <LandingNavbar></LandingNavbar>
      <Background>
      <LandingMain>
        <LandingImg src={logo} alt="GruApp logo"></LandingImg>
        {latitude && longitude && <MapView lat = {latitude} long = {longitude}/>}
        <LandingH1>¡Bienvenido!</LandingH1>
        <LandingP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </LandingP>
      </LandingMain>
      </Background>
    </section>
  );
}

export default Landing;
