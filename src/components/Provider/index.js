import './styles.css';

function Search({ users, initLoc, finalLoc, date, motoid, motorcycles }) {
  const [moto] = motorcycles.filter((motorcycle) => motoid === motorcycle._id);

  const [user] = users.filter((user) => moto.userID === user._id);

  return (
    <section className="containerElements">
      <div className="containerElement">{user.name}</div>
      <div className="containerElement">{`${initLoc} / ${finalLoc} / ${date} / ${moto.type} / ${moto.cc}`}</div>
      <div className="containerElement">
        <img src={user.photo} alt={user.name}></img>
      </div>
    </section>
  );
}

function Provider({ services, motorcycles, users }) {
  return (
    <section>
      {!!services &&
        services.length > 0 &&
        services.map(({ _id, initLoc, finalLoc, date, motoID }) => {
          return (
            <article key={_id} className="onlyService">
              <Search
                users={users}
                services={services}
                motoid={motoID}
                motorcycles={motorcycles}
                initLoc={initLoc}
                finalLoc={finalLoc}
                date={date}
              />
            </article>
          );
        })}
    </section>
  );
}

export default Provider;
