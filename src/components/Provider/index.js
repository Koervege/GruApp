import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Photo, ContainerList, ContainerElement, SectionList } from './styles';
import { useSelector } from 'react-redux';


function Provider({ services }) {

  const { userFront } = useSelector(({ usersReducer }) => ({
      userFront: usersReducer.userFront,
    })
  );

  return (
    <SectionList>
      {!!services &&
        services.length > 0 &&
        services.map(({ _id, initLoc, finalLoc, date, bikeID, towID }) => {
          const dateArr = date.split('-');
          const newDate = new Date(dateArr[0], dateArr[1], dateArr[2]);
          const dateFormat = format(newDate, 'PPPP', { locale: es });
          if (userFront.towIDs[0] === towID._id) {
            return (
              <ContainerList key={_id}>
                <ContainerElement>{bikeID.clientID.name}</ContainerElement>
                <ContainerElement>{`${initLoc} / ${finalLoc} / ${dateFormat} / ${bikeID.type} / ${bikeID.cc}`}</ContainerElement>
                <ContainerElement>
                  <Photo
                    src={bikeID.clientID.photo}
                    alt={bikeID.clientID.name}
                  ></Photo>
                </ContainerElement>
              </ContainerList>
            );
          }
        })}
    </SectionList>
  );
}

export default Provider;
