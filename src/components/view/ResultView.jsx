import Result from "../../model/Result";

export default function ResultView() {

    const res = JSON.parse(localStorage.getItem("result"))
    console.log(res);

    return (
        <div className="font-inter">
            <div className="mt-12 mx-auto px-4 md:w-4/5">
                <div>
                    <p className="flex justify-center font-inter font-extrabold text-2xl text-indigo-600">Resultados gerais do trajeto:</p>

                    <div className="md:block">
                        <p className="mt-6 font-inter flex justify-center font-bold">Rodovia mais perigosa desse trajeto: BR-{res.most_dangerous_br}</p>
                        <div className="md:flex md:justify-center">
                            <p className="font-inter table bg-red-500 font-medium text-sm text-white py-0.5 px-2 rounded-full">{res.fatal_average_in_dangerous_br.toFixed(2)}% dos acidentes são fatais</p>
                        </div>
                    </div>
                    <p className="mt-6 flex font-inter justify-center text-sm font-medium text-gray-600">Caso ocorra um acidentes, as chances de sua gravidade são:</p>
                    <div className="mt-3 font-inter flex justify-around">
                        <div>
                            <div className="rounded-full mx-auto bg-green-500 w-16 h-16 flex items-center">
                                <p className="mx-auto my-auto text-white font-bold text-sm">{res.average_ileso.toFixed(2)}%</p>
                            </div>
                            <p className="mt-2 font-inter text-sm font-bold text-gray-600 text-center">Sem vítimas</p>
                        </div>
                        <div className="ml-4">
                            <div className="rounded-full mx-auto bg-yellow-500 w-16 h-16 flex items-center">
                                <p className="mx-auto my-auto text-white font-bold text-sm">{res.average_ferido.toFixed(2)}%</p>
                            </div>
                            <p className="mt-2 font-inter text-sm font-bold text-gray-600 text-center">Com vítimas feridas</p>
                        </div>
                        <div>
                            <div className="rounded-full mx-auto bg-red-500 w-16 h-16 flex items-center">
                                <p className="mx-auto my-auto text-white font-bold text-sm ">{res.average_fatal.toFixed(2)}%</p>
                            </div>
                            <p className="mt-2 font-inter text-sm font-bold text-gray-600 text-center">Com vítimas fatais</p>
                        </div>
                    </div>
                </div>
                <p className="mb-12 mt-10 flex justify-center font-inter font-extrabold text-2xl text-indigo-600">Resultados individuais do trajeto:</p>
                {res.route_infos.map((route) => {
                    return (
                        <div className="border-[1px] border-indigo-600 mb-12 rounded-xl text-gray-700">
                            <div className="font-inter font-medium">
                                <p className="mt-2">Causa de acidente mais comum: {route.common_cause.replaceAll("_", " ")}</p>
                                <p className="mt-2">Tipo de acidente mais comum: {route.common_type.replaceAll("_", " ")}</p>
                                <p className="mt-2">Causa de acidentes nesse horário {}: {route.common_cause.replaceAll("_", " ")}</p>
                                <div className="flex gap-6 flex-wrap md:pr-24 md:pl-24 md:gap-y-7 mt-12 justify-center z-0">
                                    <div>
                                        <div className="rounded-full "></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
