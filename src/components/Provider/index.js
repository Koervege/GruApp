import moment from 'moment';
import 'moment/locale/es';
import { Photo, ContainerList, ContainerElement, SectionList } from './styles';

function Provider({ services }) {
  return (
    <SectionList>
      {!!services &&
        services.length > 0 &&
        services.map(({ _id, initLoc, finalLoc, date, bikeID }) => {
          moment.locale('es');
          let dateFormat = moment(date).format('LL');
          return (
            <ContainerList key={_id}>
              <ContainerElement>{bikeID.clientID.name}</ContainerElement>
              <ContainerElement>{`${initLoc} / ${finalLoc} / ${dateFormat} / ${bikeID.type} / ${bikeID.cc} cc`}</ContainerElement>
              <ContainerElement>
                <Photo
                  src={bikeID.clientID.photo}
                  alt={bikeID.clientID.name}
                ></Photo>
              </ContainerElement>
            </ContainerList>
          );
        })}
    </SectionList>
  );
}

export default Provider;
