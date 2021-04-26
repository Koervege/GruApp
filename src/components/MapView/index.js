import React from 'react';
import { TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { StyledMapContainer } from './styles'
import Markers from '../Markers'


function MapView({lat,long}) {

  return (
    <StyledMapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers/>
    </StyledMapContainer>
  )
}

export default MapView
