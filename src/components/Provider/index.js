import { Photo, ContainerList, ContainerElement, SectionList } from './styles';

function Search({ users, initLoc, finalLoc, date, motoid, motorcycles }) {
  const [moto] = motorcycles.filter((motorcycle) => motoid === motorcycle._id);

  const [user] = users.filter((user) => moto.userID === user._id);

  return (
    <ContainerList>
      <ContainerElement>{user.name}</ContainerElement>
      <ContainerElement>{`${initLoc} / ${finalLoc} / ${date} / ${moto.type} / ${moto.cc}`}</ContainerElement>
      <ContainerElement>
        <Photo src={user.photo} alt={user.name}></Photo>
      </ContainerElement>
    </ContainerList>
  );
}

function Provider({ services, motorcycles, users }) {
  return (
    <SectionList>
      {!!services &&
        services.length > 0 &&
        services.map(({ _id, initLoc, finalLoc, date, motoID }) => {
          return (
            <Search
              key={_id}
              users={users}
              services={services}
              motoid={motoID}
              motorcycles={motorcycles}
              initLoc={initLoc}
              finalLoc={finalLoc}
              date={date}
            />
          );
        })}
    </SectionList>
  );
}

export default Provider;
