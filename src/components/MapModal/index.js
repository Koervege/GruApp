import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, Sidebar, StyledSpan,ClickCont } from './styles.js'
import Button from '../Button'
import axios from 'axios';

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function Map() {

  const mapContainer = useRef();
  const [lat, setLat] = useState(4.36);
  const [lng, setLng] = useState(-74.35);
  const [ognLat, setOgnLat] = useState('');
  const [ognLng, setOgnLng] = useState('');
  const [destLat, setDestLat] = useState('');
  const [destLng, setDestLng] = useState('');
  const [zoom, setZoom] = useState(5.4);
  const [address, setAddress] = useState({
    ognLocation: '',
    ognCity: '',
    ognState: '',
    ognCountry: '',
    destLocation: '',
    destCity: '',
    destState: '',
    destCountry: '',
  });


  const getAddress = async() => {
    const tokenHERE = process.env.REACT_APP_HERE_API_KEY;
    console.log(lat);
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${lng}&lang=en-US&apikey=${tokenHERE}`, 
      })
      if (data) {
        setAddress({
          ognLocation: data.items[0].address.district,
          ognCity: data.items[0].address.city,
          ognState: data.items[0].address.county,
          ognCountry: data.items[0].address.countryCode,
        })
      }
    } catch (error) {
      console.log('no pasó nada');
    }
  }; 


  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: `mapbox://styles/mapbox/streets-v11`,
      center: [lng, lat],
      zoom: zoom
    });
  
    const ognMarker = new mapboxgl.Marker({
      color: "#ff0000",
      draggable: true
      })
      .setLngLat(map.getCenter())
      .addTo(map);

    const destMarker = new mapboxgl.Marker({
      draggable: true
      })
      .setLngLat(map.getCenter())
      .addTo(map);


      const onDragEnd= () => {
        var lngLat = ognMarker.getLngLat();
        setAddress(`Longitude: ${lngLat.lng} Latitude: ${lngLat.lat}`)
      }


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
    
    ognMarker.on('dragend', onDragEnd);


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
        <Button color='primary' onClick={getAddress}>Click</Button>
        <StyledSpan>para conocer ubicaciones de origen y destino</StyledSpan>
      </ClickCont>
      {address.city && <StyledSpan>{`Tu ubicación actual es ${address.city}, ${address.state}, ${address.country}` }</StyledSpan>}
      {address.location && <StyledSpan>{`Sector ${address.location}`}</StyledSpan>}
    </>
  )
}

export default Map
