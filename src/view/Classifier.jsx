import { useEffect, useState } from "react"
import Select from 'react-select'

export default function Classifier() {

    const [province, setProvince] = useState("");
    const [counties, setCounties] = useState([]);
    const [brs, setBrs] = useState([]);
    const [br, setBr] = useState("");
    const [countie, setCountie] = useState("");
    const [weekday, setWeekday] = useState("");
    const [daytime, setDaytime] = useState("");
    const [weather, setWeather] = useState("");
    const [lanetype, setLaneType] = useState("");
    const [lanetracing, setLaneTracing, ] = useState("");
    const [dayphase, setDayPhase] = useState("");
    const [direction, setDirection] = useState("");

    const possibleWeekday = [
        {value: "SEGUNDA", label: "Segunda-feira"}, 
        {value: "TERCA", label: "Terça-feira"}, 
        {value: "QUARTA", label: "Quarta-feira"},
        {value: "QUINTA", label: "Quinta-feira"}, 
        {value: "SEXTA", label: "Sexta-feira"}, 
        {value: "SABADO", label: "Sabado"},
        {value: "DOMINGO", label: "Domingo"}]
        
    const possibleDaytime = [
        {value: "1", label: "1AM"},
        {value: "2", label: "2AM"},
        {value: "3", label: "3AM"},
        {value: "4", label: "4AM"},
        {value: "5", label: "5AM"},
        {value: "6", label: "6AM"},
        {value: "7", label: "7AM"},
        {value: "8", label: "8AM"},
        {value: "9", label: "9AM"},
        {value: "10", label: "10AM"},
        {value: "11", label: "11AM"},
        {value: "12", label: "12AM"},
        {value: "13", label: "1PM"},
        {value: "14", label: "2PM"},
        {value: "15", label: "3PM"},
        {value: "16", label: "4PM"},
        {value: "17", label: "5PM"},
        {value: "18", label: "6PM"},
        {value: "19", label: "7PM"},
        {value: "20", label: "8PM"},
        {value: "21", label: "9PM"},
        {value: "22", label: "10PM"},
        {value: "23", label: "11PM"},
    ]

    const possibleProvinces = [
        {value: "AC", label: "Acre"},
        {value: "AL", label: "Alagoas"},
        {value: "AM", label: "Amazonas"},
        {value: "AP", label: "Amapá"},
        {value: "BA", label: "Bahia"},
        {value: "CE", label: "Ceará"},
        {value: "DF", label: "Distrito Federal"},
        {value: "ES", label: "Espirito Sasnto"},
        {value: "MA", label: "Maranhão"},
        {value: "MS", label: "Mato Grosso do Sul"},
        {value: "MT", label: "Mato Grosso"},
        {value: "PA", label: "Para"},
        {value: "PB", label: "Paraíba"},
        {value: "PE", label: "Pernambuco"},
        {value: "PI", label: "Piaui"},
        {value: "PR", label: "Paraná"},
        {value: "RJ", label: "Rio de Janeiro"},
        {value: "RN", label: "Rio Grande do Norte"},
        {value: "RO", label: "Rondonia"},
        {value: "RR", label: "Roraima"},
        {value: "RS", label: "Rio Grande do Sul"},
        {value: "SC", label: "Santa Catarina"},
        {value: "SE", label: "Sergipe"},
        {value: "SP", label: "São Paulo"},
        {value: "TO", label: "Tocantins"}]

    const possibleWeather = [
        {value: "CHUVA", label: "Chuvoso"},
        {value: "SOL", label: "Ensolarado"},
        {value: "GAROA/CHUVISCO", label: "Garoando/Chuviscando"},
        {value: "NEVE", label: "Nevando"},
        {value: "GRANIZO", label: "Granizo"},
        {value: "CEU_CLARO", label: "Céu claro"},
        {value: "NEVOEIRO/NEBLINA", label: "Neoveiro ou neblina"},
        {value: "NUBLADO", label: "Nublado"},
        {value: "VENTO", label: "Ventando"}
    ]


    const possibleLaneTypes = [
        {value: "SIMPLES", label: "Simples"}, 
        {value: "MULTIPLA", label: "Multipla"}, 
        {value: "DUPLA", label: "Multipla"}
    ]
    
    const possibleLaneTracing = [
        {value: "CURVA", label: "Curva"},
        {value: "TUNEL", label: "Tunel"},
        {value: "CRUZAMENTO", label: "Cruzamento"},
        {value: "RETA", label: "Reta"},
        {value: "ROTATORIA", label: "Rotatória"},
        {value: "VIADUTO", label: "Viaduto"},
        {value: "DESVIO_TEMPORARIO", label: "Desvio temporário"},
        {value: "PONTE", label: "Ponte"},
        {value: "INTERSECAO_DE_VIAS", label: "Intersecção de vias"},
        {value: "RETORNO_REGULAMENTADO", label: "Retorno regulamentado"}
    ]

    const possibleDayPhase = [
        {value: "ANOITECER", label: "Anoitecer"},
        {value: "AMANHECER", label: "Amanhecer"},
        {value: "PLENA_NOITE", label: "Plena noite"},
        {value: "PLENO_DIA", lable: "Pleno dia"}
    ]

    const possibleDirections = [
        {value: "DECRESCENTE", label: "Decrescente"},
        {value: "CRESCENTE", label: "Crescente"}
    ]
    
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
        fetch("http://localhost:8080/counties?province=SP" + province, {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then(counties => setCounties(counties))
    }

    return (
        <div className="w-2/6 mx-auto bg-white border-[1px]">
            <div className="mx-10 my-10">
                <p className="text-green-500 text-7xl font-inter font-extrabold">Safety</p>
                <p className="ml-8 text-gray-900 text-7xl font-inter font-extrabold">Tracker</p>
                <Select options={possibleProvinces} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione o seu estado" onChange={(val) => {setProvince(val.value)}}/>
                <Select options={possibleWeekday} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione o dia da semana" onChange={(val) => {setWeekday(val.value)}}/>
                <Select options={brs} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione a BR por onde você passará" onChange={(val) => {setBr(val.value)}}/>
                <Select options={counties} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione a cidade por onde você passará" onChange={(val) => {setCountie(val.value)}}/>
                <Select options={possibleDaytime} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione o horário do dia" onChange={(val) => {setDaytime(val.value)}}/>
                <Select options={possibleDayPhase} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione a fase do dia" onChange={(val) => {setDayPhase(val.value)}}/>
                <Select options={possibleWeather} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione como está o clima" onChange={(val) => {setWeather(val.value)}}/>
                <Select options={possibleLaneTracing} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione o traçado da via" onChange={(val) => {setLaneTracing(val.value)}}/>
                <Select options={possibleDirections} className="font-inter font-md text-md mb-1 mt-4 text-gray-700 w-full" placeholder="Selecione a direção da via" onChange={(val) => {setDirection(val.value)}}/>
                <Select options={possibleLaneTypes} className="font-inter font-md text-md mb-4 mt-4 text-gray-700 w-full" placeholder="Selecione o tipo da via" onChange={(val) => {setLaneType(val.value)}}/>
                <button className="bg-green-500 w-full rounded-md py-2 px-4 text-white font-semibold">CLASSIFICAR</button>
            </div>
        </div>
    )
}