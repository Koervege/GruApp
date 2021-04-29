import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, Sidebar, StyledSpan,ClickCont } from './styles.js'
import Button from '../Button'
import axios from 'axios';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
const btn = document.getElementsByClassName('mapboxgl-ctrl-geolocate')

function Map() {

  const mapContainer = useRef();
  const [lat, setLat] = useState(4.36);
  const [lng, setLng] = useState(-74.35);
  const [zoom, setZoom] = useState(5.4);
  const [address, setAddress] = useState({
    location: '',
    city: '',
    state: '',
    country: '',
  });


  const printAddress = async() => {
    const tokenHERE = process.env.REACT_APP_HERE_API_KEY;

    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${lng}&lang=en-US&apikey=${tokenHERE}`, 
      })
      if (data) {
        setAddress({
          location: data.items[0].address.district,
          city: data.items[0].address.city,
          state: data.items[0].address.county,
          country: data.items[0].address.countryCode,
        })
      }
    } catch (error) {
    }
  }; 


  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: `mapbox://styles/mapbox/streets-v11`,
      center: [lng, lat],
      zoom: zoom
    });
  
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    )
    
      return () => map.remove();
    }, []);
    
  return (
    <>
      <MapContainer ref={mapContainer}>
      <Sidebar>
        <span> lng: {lng} | lat: {lat} | zoom: {zoom}</span>
      </Sidebar>
      </MapContainer>
      <ClickCont>
        <Button color='primary' onClick={printAddress}>Click</Button>
        <StyledSpan>para conocer ubicación actual</StyledSpan>
      </ClickCont>
      {address.city && <StyledSpan>{`Tu ubicación actual es ${address.city}, ${address.state}, ${address.country}` }</StyledSpan>}
      {address.location && <StyledSpan>{`Barrio ${address.location}`}</StyledSpan>}
    </>
  )
}

export default Map
