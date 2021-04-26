import L from 'leaflet';

const iconPerson = new L.Icon({
  iconUrl: require('../../images/marcador-de-posicion.png'),
  iconRetinaUrl: require('../../images/marcador-de-posicion.png'),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(35, 40),
  className: 'leaflet-div-icon'
});

export { iconPerson };
