import { useNavigate } from "react-router-dom";

import { MdOutlineAddBox } from "react-icons/md";

const TeamBuilding = () => {
    const navigate = useNavigate();

    const articles = [
        { titles: 'League of Legends', description: 'Grieta del invocador 5 vs 5', time: '13.10.23 18:30PM', location: 'Bs.As Argentina' },
        { titles: 'Futbol', description: 'Futbol 5 5 vs 5', time: '21.10.23 18:30PM', location: 'Palermo Futbol,CABA Bs.As Argentina' },
        { titles: 'League of Legends', description: 'Grieta del invocador 5 vs 5', time: '13.10.23 18:30PM', location: 'Bs.As Argentina' },
        { titles: 'Padel', description: 'Grieta del invocador 2 vs 2', time: '13.10.23 19:30PM', location: 'Bs.As Argentina' },
    ];

    return (
        <>
            <h3 className="flex font-bold">Crea tu equipo</h3>
            <div className="w-16 h-16 rounded-full bg-[#D9D9D9] relative my-6">
                <button
                    onClick={() => {
                        navigate("/create");
                    }}
                    className="absolute bottom-0 right-0">
                    {" "}
                    <MdOutlineAddBox />
                </button>
            </div>
            <h2 className="flex font-bold mt-3 mb-3">Busquedas relacionadas</h2>
            <div className="border-2 border-solid rounded-xl bg-white max-w-[494px] h-auto flex flex-col items-center sm:justify-center p-2">
                {articles.map((article, index) => (
                    <article key={index} className="flex flex-col items-center sm:flex-row  sm:justify-evenly  p-2 gap-2 w-full my-1 shadow-sm hover:shadow-xl border-b-2">
                        <img className="rounded-full w-[55px] h-[55px]" src="/img/profile_default.webp" alt="" />
                        <div className="text-center md:text-left sm:w-[42%] ">
                            <h3 className="font-semibold text-base">{article.titles}</h3>
                            <p className="text-[13px]">{article.description}</p>
                            <p className="text-[13px]">{article.time}</p>
                            <span className="text-[13px]">{article.location}</span>
                        </div>
                        <button className="text-[13px] font-normal rounded-md bg-slate-600 mt-1 md:mt-0 w-[122px] h-[29px]">Solicitar unirme</button>

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