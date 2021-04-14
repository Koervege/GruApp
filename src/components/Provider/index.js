import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Photo, ContainerList, ContainerElement, SectionList } from './styles';

function Provider({ services }) {
  return (
    <SectionList>
      {!!services &&
        services.length > 0 &&
        services.map(({ _id, initLoc, finalLoc, date, bikeID }) => {
          const dateArr = date.split('-');
          const newDate = new Date(dateArr[0], dateArr[1], dateArr[2]);
          const dateFormat = format(newDate, 'PPPP', { locale: es });
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