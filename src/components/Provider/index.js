import { Photo, ContainerList, ContainerElement, SectionList } from './styles';

function Provider({ services }) {
  return (
    <SectionList>
      {!!services &&
        services.length > 0 &&
        services.map(({ _id, initLoc, finalLoc, date, bikeID }) => {
          return (
            <ContainerList key={_id}>
              <ContainerElement>{bikeID.userId.name}</ContainerElement>
              <ContainerElement>{`${initLoc} / ${finalLoc} / ${date} / ${bikeID.type} / ${bikeID.cc} cc`}</ContainerElement>
              <ContainerElement>
                <Photo
                  src={bikeID.userId.photo}
                  alt={bikeID.userId.name}
                ></Photo>
              </ContainerElement>
            </ContainerList>
          );
        })}
    </SectionList>
  );
}

export default Provider;
