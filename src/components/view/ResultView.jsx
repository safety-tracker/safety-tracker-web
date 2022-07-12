import { useSearchParams } from "react-router-dom";

export default function ResultView() {

    const [searchParams, setSearchParams] = useSearchParams();
    const fatal = parseFloat(localStorage.getItem("riscoFatal")).toFixed(2);
    const ferido = parseFloat(localStorage.getItem("riscoFerido")).toFixed(2);
    const ilesos = parseFloat(localStorage.getItem("riscoIleso")).toFixed(2);

    return (
        <div>
            <div>
                <div className="mx-10 my-10">
                    <p className="text-5xl font-inter font-bold text-gray-900 mb-12">Resultados: </p>
                    <p className="ml-16 text-2xl font-light font-inter">Caso ocorra um acidente:</p>
                    <div className="text-md font-inter ml-20 mt-4">
                        <p>Chance de todos saírem ilesos: {parseFloat(ilesos).toFixed(2)}%</p>
                        <p className={`${ferido < 30 ? "text-green-500" : fatal >= 30 && fatal < 60 ? "text-yellow-300" : "text-red-500"}`}>Chance de ocorrerem vitimas feridas: {parseFloat(ferido).toFixed(2)}%</p>
                        <p className={`${fatal < 3 ? "text-green-500" : fatal >= 3 && fatal < 5 ? "text-yellow-300" : "text-red-500"}`}>Chance de ocorrerem vitimas fatais: {fatal}%</p>
                    </div>

                    <p className="ml-16 text-2xl font-light font-inter mt-8">Estatísticas sobre a unidade federal (UF):</p>
                    <div className="text-md font-inter ml-20 mt-4">
                        <p>BR mais perigosa (maior quantidade de acidentes): {localStorage.getItem("dangerousBr")}</p>
                        <p>Horário mais perigoso (maior quantidade de acidentes): {localStorage.getItem("dangerousTime")}</p>
                    </div>

                    <p className="ml-16 text-2xl font-light font-inter mt-8">Estatísticas sobre a BR {localStorage.getItem("br")}:</p>
                    <div className="text-md font-inter ml-20 mt-4">
                        <p>Causa mais comum de acidentes: {localStorage.getItem("causaMaisComum").replaceAll("_", " ")}</p>
                        <p>Tipo mais comum de acidentes: {localStorage.getItem("tipoMaisComum").replaceAll("_", " ")}</p>
                        <p>Tipo mais comum de acidentes nesse horário: {localStorage.getItem("tipoDeAcidenteMaisRecorente").replaceAll("_", " ")}</p>
                        <p>Horário mais perigoso (maior quantidade de acidentes): {localStorage.getItem("horarioMaisPerigoso").replaceAll("_", " ")}h</p>
                        <p>Horário mais seguro (menor quantidade de acidentes): {localStorage.getItem("horarioMaisSeguro").replaceAll("_", " ")}h</p>
                    </div>
                </div>
            </div>
        </div>
    )
}