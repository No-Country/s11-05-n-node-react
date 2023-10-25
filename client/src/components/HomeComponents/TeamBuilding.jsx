

const TeamBuilding = () => {
    const articles = [
        { titles: 'League of Legends', description: 'Grieta del invocador 5 vs 5', time: '13.10.23 18:30PM', location: 'Bs.As Argentina' },
        { titles: 'Futbol', description: 'Futbol 5 5 vs 5', time: '21.10.23 18:30PM', location: 'Palermo Futbol,CABA Bs.As Argentina' },
        { titles: 'League of Legends', description: 'Grieta del invocador 5 vs 5', time: '13.10.23 18:30PM', location: 'Bs.As Argentina' },
    ];

    return (
        <>
            <h3 className="flex font-bold">Crea tu equipo</h3>
            <div className="border-2 border-solid max-w-[494px] h-auto my-8 py-3 p-3 flex flex-col items-center">
                {articles.map((article, index) => (
                    <article key={index} className="flex justify-evenly items-center p-2 gap-4 w-full md:w-3/4 my-4">
                        <img className="rounded-full w-[55px] h-[55px]" src="/img/profile_default.webp" alt="" />
                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-base">{article.titles}</h3>
                            <p className="text-[13px]">{article.description}</p>
                            <p className="text-[13px]">{article.time}</p>
                            <span className="text-[13px]">{article.location}</span>
                        </div>
                        <button className="text-[13px] font-normal bg-slate-600 mt-1 md:mt-0 w-[122px] h-[29px]">Solicitar unirme</button>

                    </article>
                ))}


            </div>
        </>
    );
};

export default TeamBuilding;


{/* <div className=" border-2 border-solid w-full h-auto my-8  py-3">

    <article className="flex justify-center items-center gap-4">
        <img
            className=" rounded-full w-10 h-10"
            src=" /img/profile_default.webp" alt="" />
        <div>
            <h3 className="font-bold">League of Legends</h3>
            <p>Grieta del invocador 5 vs 5</p>
            <p> 13.10.23 18:30PM</p>
            <span>Bs.As Argentina</span>
        </div>
        <button className="bg-slate-600">Solicitar unirme</button>
    </article>
    <article className="flex justify-center items-center gap-4">
        <img
            className=" rounded-full w-10 h-10"
            src=" /img/profile_default.webp" alt="" />
        <div>
            <h3 className="font-bold">Futbol</h3>
            <p>Futbol 5  5 vs 5</p>
            <p> 21.10.23 18:30PM</p>
            <span>Palermo Futbol,CABA Bs.As Argentina</span>

        </div>
        <button className="bg-slate-600">Solicitar unirme</button>
    </article>
    <article className="flex justify-center items-center gap-4">
        <img
            className=" rounded-full w-10 h-10"
            src=" /img/profile_default.webp" alt="" />
        <div>
            <h3 className="font-bold">League of Legends</h3>
            <p>Grieta del invocador 5 vs 5</p>
            <p> 13.10.23 18:30</p>
            <span>Bs.As Argentina</span>
        </div>
        <button className="bg-slate-600">Solicitar unirme</button>
    </article>
</div> */}