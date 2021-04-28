import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, Sidebar, StyledP } from './styles.js'

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoicGlwZXNvdG8xMyIsImEiOiJja2V3YmN6MjMxdzRtMnlvbWVzcjk4M3ltIn0.2_KKrhFgzx5ljS7shXG28A';

function Map() {

  const mapContainer = useRef();
  const [lat, setLat] = useState(4.36);
  const [lng, setLng] = useState(-74.35);
  const [zoom, setZoom] = useState(5.4);

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
      </MapContainer>
      <Sidebar>
        <StyledP>Tu ubicación actual es:</StyledP>
        <span> lng: {lng} | lat: {lat}</span>
        <br/>
        <StyledP>Desliza hacia abajo para descubrir los diferentes servicios que tienes usando nuestra aplicación.</StyledP>
      </Sidebar>
    </>
  )
}

export default Map
