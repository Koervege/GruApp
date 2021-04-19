export default function CountServices({ services }){
  let serviceDone = services.filter((service) => service.servStat === 'Terminado');
  if(serviceDone.length > 0){
    return `${serviceDone.length} servicio${serviceDone.length === 1 ? '' : 's'}`
  } else {
    return 'Conductor validado'
  }
}