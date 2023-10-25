function LoadTeams() {
  const loadTeams = () => {
    const teams = [];

    for (let index = 0; index < 3; index++) {
      teams.push(
        <div className="flex flex-col justify-center items-center">
          <div className="w-16 h-16 rounded-full border-2 border-blue-500 bg-slate-300 "></div>

          <p>Nombre equipo</p>
        </div>
      );
    }

    return teams;
  };

  return (
    <>
      <h2 className="font-semibold">Mis equipos</h2>
      {/* container//// */}
      <div className="bg-blue-50 flex gap-8  p-6 w-full  shadow-md rounded-md">{loadTeams()}</div>
    </>
  );
}

export default LoadTeams;
