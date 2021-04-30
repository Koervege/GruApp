import React, { useRef, useEffect, useState } from 'react';
import { MapContainer, Sidebar, StyledSpan,ClickCont } from './styles.js'
import Button from '../Button'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { createService } from '../../store/servicesReducer'

import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function Map(props) {

  const dispatch = useDispatch();
  const { infoForMap } = useSelector(({servicesReducer}) => ({
    infoForMap: servicesReducer.infoForMap,
  }));

  const mapContainer = useRef();
  const [lat, setLat] = useState(4.36);
  const [lng, setLng] = useState(-74.35);
  const [ognLat, setOgnLat] = useState('');
  const [ognLng, setOgnLng] = useState('');
  const [destLat, setDestLat] = useState('');
  const [destLng, setDestLng] = useState('');
  const [zoom, setZoom] = useState(5.4);
  const [ognAddress, setOgnAddress] = useState({
    ognLocation: '',
    ognCity: '',
    ognState: '',
    ognCountry: '',
  });
  const [destAddress, setDestAddress] = useState({
    destLocation: '',
    destCity: '',
    destState: '',
    destCountry: '',
  });


  const getAddress = async() => {
    const tokenHERE = process.env.REACT_APP_HERE_API_KEY;
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${ognLat}%2C${ognLng}&lang=en-US&apikey=${tokenHERE}`, 
      })
      if (data) {
        setOgnAddress({
          ognLocation: data.items[0].address.district,
          ognCity: data.items[0].address.city,
          ognState: data.items[0].address.county,
          ognStreet: data.items[0].address.street,
        })
      }
    } catch (error) {
      console.log('no pasó nada');
    }

    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${destLat}%2C${destLng}&lang=en-US&apikey=${tokenHERE}`, 
      })
      if (data) {
        console.log(data.items[0].address)
        setDestAddress({
          destLocation: data.items[0].address.district,
          destCity: data.items[0].address.city,
          destState: data.items[0].address.county,
          destStreet: data.items[0].address.street,
        })
      }
    } catch (error) {
      console.log('no pasó nada');
    }
  }; 

  function addressToNiceString(ognAddress, destAddress) {
    return(
      [`
          ${ognAddress.ognCity}, 
          ${ognAddress.ognState}, 
          ${ognAddress.ognLocation ? 'sector ' + ognAddress.ognLocation : ''},
          ${ognAddress.ognStreet ? ognAddress.ognStreet : ''}
        `,
        `
          ${destAddress.destCity}, 
          ${destAddress.destState}, 
          ${destAddress.destLocation ? 'sector ' + destAddress.destLocation : ''},
          ${destAddress.destStreet ? destAddress.destStreet : ''}
      `]
    )
  }

  function newService([initLoc, finalLoc]) {
    dispatch(createService(initLoc, finalLoc, infoForMap.date, infoForMap.bikeID, infoForMap.towID));
    props.closeModal();
    props.Swal.fire({
      icon: 'success',
      title: 'Solicitud enviada exitosamente',
      text: `${infoForMap.supplierName} te indicará la hora de recogida y el costo del servicio`,
      confirmButtonText: '¡Entendido!',
    });
  }

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


      const onDragEndOgn= () => {
        const lngLat = ognMarker.getLngLat();
        setOgnLat(lngLat.lat);
        setOgnLng(lngLat.lng);
      }

      const onDragEndDest= () => {
        const lngLat = destMarker.getLngLat();
        setDestLat(lngLat.lat);
        setDestLng(lngLat.lng);
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
    
    ognMarker.on('dragend', onDragEndOgn);
    destMarker.on('dragend', onDragEndDest);


      return () => map.remove();
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <Button onClick={() => newService(addressToNiceString(ognAddress, destAddress))}>Usar ubicaciones</Button>
      </ClickCont>
      {ognAddress.ognCity && 
      <StyledSpan origin="true">

        {`
          El inicio es: 
          ${addressToNiceString(ognAddress, destAddress)[0]}
        `}
      </StyledSpan>}
      <br/>
      {destAddress.destCity && 
      <StyledSpan>
        {`
          El destino es: 
          ${addressToNiceString(ognAddress, destAddress)[1]}
        `}
      </StyledSpan>}
    </>
  )
}

export default Map
