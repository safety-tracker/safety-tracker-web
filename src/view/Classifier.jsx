import { useEffect, useState } from "react"
import Select from 'react-select'
import { daytimeMap, getDayTime, getWeekday, possibleDaytime, possibleDirections, possibleLaneTracing, possibleLaneTypes, possibleProvinces, possibleWeather, possibleWeekday } from "../model/info";
import ResultView from "./ResultView";

console.log(getDayTime())

export default function Classifier() {
    const [province, setProvince] = useState("");
    const [counties, setCounties] = useState([]);
    const [brs, setBrs] = useState([]);
    const [br, setBr] = useState("");
    const [countie, setCountie] = useState("");
    const [daytime, setDaytime] = useState(new Date().getHours())
    const [weekday, setWeekday] = useState(getWeekday())
    const [weather, setWeather] = useState("");
    const [lanetype, setLaneType] = useState("");
    const [lanetracing, setLaneTracing, ] = useState("");
    const [dayphase, setDayPhase] = useState(getDayTime())
    const [direction, setDirection] = useState("");
    const [allowClick, setAllowClick] = useState(true);
    
    useEffect(() => {
        fetch("http://localhost:8080/brs?province=" + province, {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(brs => setBrs(brs))
    }, [province])

    useEffect(() => {
        fetch("http://localhost:8080/counties?province=" + province, {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(response => response.json())
        .then(counties => setCounties(counties))
    }, [province]);

    function classify() {
        const obj = {
            estado: province, 
            br: br,
            diaDaSemana: weekday,
            cidade: countie,
            horario: daytime,
            sentidoVia: direction,
            condicoesMetereologicas: weather,
            tipoPista: lanetype,
            tracadoVia: lanetracing,
            faseDia: dayphase
        }
        console.log(obj);
        fetch("http://localhost:8080/classify", {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': '*'
            }, body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(resp => {
            localStorage.setItem("riscoFatal", resp.riscoFatal);
            localStorage.setItem("riscoIleso", resp.riscoIleso);
            localStorage.setItem("riscoFerido", resp.riscoFerido);
            localStorage.setItem("dangerousBr", resp.dangerousBr);
            localStorage.setItem("dangerousTime", resp.dangerousTime);
            localStorage.setItem("causaMaisComum", resp.causaMaisComum);
            localStorage.setItem("tipoMaisComum", resp.tipoMaisComum);
            localStorage.setItem("tipoDeAcidenteMaisRecorente", resp.tipoDeAcidenteMaisRecorente);
            localStorage.setItem("horarioMaisPerigoso", resp.horarioMaisPerigoso);
            localStorage.setItem("horarioMaisSeguro", resp.horarioMaisSeguro);
            window.location.href = "/result";
            setAllowClick(true);
        })
    }

    function updateDaytime(val) {
        setDaytime(val.value);
        setDayPhase(daytimeMap.get(parseInt(val.value)))
    }

    return (
        <div className="bg-white border-[1px]">
            <div className="mx-10 my-10 ">
                <div className="flex align-center justify-center">
                    <div>
                        <p className="text-indigo-500 text-7xl text-center font-inter font-extrabold">Safety</p>
                        <p className="text-gray-900 text-7xl text-center font-inter font-extrabold">Tracker</p>
                    </div>
                    <div className="ml-8">
                        <svg fill="#0b1a29" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path d="M7 13.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm9 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm4-1c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-17.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2zm19.318 3.168c-.761-1.413-1.699-3.17-2.684-4.812-.786-1.312-1.37-1.938-2.751-2.187-1.395-.25-2.681-.347-4.585-.347s-3.19.097-4.585.347c-1.381.248-1.965.875-2.751 2.187-.981 1.637-1.913 3.382-2.684 4.812-.687 1.273-.98 2.412-.98 3.806 0 1.318.42 2.415 1 3.817v2.209c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-1h13v1c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-2.209c.58-1.403 1-2.499 1-3.817 0-1.394-.293-2.533-.98-3.806zm-15.641-3.784c.67-1.117.852-1.149 1.39-1.246 1.268-.227 2.455-.316 4.231-.316s2.963.088 4.231.316c.538.097.72.129 1.39 1.246.408.681.81 1.388 1.195 2.081-1.456.22-4.02.535-6.816.535-3.048 0-5.517-.336-6.805-.555.382-.686.779-1.386 1.184-2.061zm11.595 10.616h-11.948c-1.671 0-3.026-1.354-3.026-3.026 0-1.641.506-2.421 1.184-3.678 1.041.205 3.967.704 7.816.704 3.481 0 6.561-.455 7.834-.672.664 1.231 1.166 2.01 1.166 3.646 0 1.672-1.355 3.026-3.026 3.026zm5.526-10c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202z"/></svg></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <Select options={possibleProvinces} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione o seu estado" onChange={(val) => {setProvince(val.value); localStorage.setItem("province", province);}}/>
                    <Select options={brs} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione a BR por onde você passará" onChange={(val) => {setBr(val.value); localStorage.setItem("br", br);}} isDisabled={province == ""}/>
                    <Select options={counties} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full"  placeholder="Selecione a cidade por onde você passará" onChange={(val) => {setCountie(val.value)}} isDisabled={province == ""}/>
                    <Select options={possibleWeekday} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione o dia da semana" onChange={(val) => {setWeekday(val.value)}} defaultInputValue={weekday}/>
                    <Select options={possibleDaytime} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione a fase do dia" onChange={(val) => {updateDaytime(val)}} defaultInputValue={daytime}/>
                    <Select options={possibleWeather} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione como está o clima" onChange={(val) => {setWeather(val.value)}}/>
                    <Select options={possibleLaneTracing} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione o traçado da via" onChange={(val) => {setLaneTracing(val.value)}}/>
                    <Select options={possibleDirections} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione a direção da via" onChange={(val) => {setDirection(val.value)}}/>
                    <Select options={possibleLaneTypes} className="font-inter font-md text-md mb-4 mt-4 text-gray-700 w-full" placeholder="Selecione o tipo da via" onChange={(val) => {setLaneType(val.value)}}/>
                </div>
                
            </div>
            <div className="flex justify-center">
                <button className="bg-indigo-500 w-2/6 rounded-md py-2 px-4 text-white font-semibold" onClick={() => {if(allowClick) {classify()}; setAllowClick(false);}}>CLASSIFICAR</button>
            </div>
        </div>
    )
}