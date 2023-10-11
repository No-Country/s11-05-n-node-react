const HeaderLanding = () => {
  return (
    <div className="flex w-full justify-center mt-8">
      <div className="max-w-[1230px] h-[28.125rem]">
        <div className="flex justify-center">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h1 className="font-bold text-[6rem]">Let’s play</h1>
              <span className="text-[2.25rem] ml-10">
                ¿Con quién quieres jugar hoy?
              </span>
            </div>
            <p className="text-[1.25rem] max-w-2xl leading-6 ">
              Con Let’s play encuentra compañeros para tus juegos online o
              deportes, de manera rápida y sencilla
            </p>
            <button className="bg-[#bebebe] w-[30.9375rem] h-[3rem] rounded-xl text-white mt-10">
              Empecemos
            </button>
          </div>
          <div className=" w-[26.875rem] h-[26.875rem] object-cover">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3615wv69xV1pSimN63nFnoQgmVFfm1dvsN7XZW40-ZTAsKz1QIhodi9JtVxvVaPu-B-c&usqp=CAU"
              alt="letsplay"
              className="rounded-full w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLanding;
