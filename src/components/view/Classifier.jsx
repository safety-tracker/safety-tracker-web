import React, { useEffect, useState } from "react"
import BRDialog from "../BRDialog";
import { daytimeMap, getDayTime, getWeekday, possibleDaytime, possibleWeather, possibleWeekday } from "../../model/info";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Route from "../Route";
import { classify as api_classify} from '../../api/api.js'
import Result from "../../model/Result";

export default function Classifier() {
    const [daytime, setDaytime] = useState(new Date().getHours())
    const [weekday, setWeekday] = useState(getWeekday())
    const [weather, setWeather] = useState("");
    const [dayphase, setDayPhase] = useState(getDayTime())
    const [allowClick, setAllowClick] = useState(true);

    const [routes, setRoutes] = useState([])

    function classify() {
        if(daytime === "" || weekday === "" || weather === "") {
            alert("Preencha todos os campos")
            return
        }
        if(routes.length === 0) {
            alert("Adicione pelo menos uma rodovia à sua rota")
            return
        }
        const obj = {
            weekday: weekday,
            daytime: daytime,
            weather: weather,
            day_phase: dayphase,
            route: routes
        }

        api_classify(obj, (result) => {
            localStorage.setItem("result", JSON.stringify(result))
            window.location.href = "/result"
        });
    }

    function updateDaytime(val) {
        setDaytime(val);
        setDayPhase(daytimeMap.get(parseInt(val)))
    }

    return (
        <div className="bg-white border-[1px] flex justify-center">
            <div className="md:mx-10 md:my-10 ">
                <div className="flex align-center justify-center">
                    <div>
                        <p className="text-indigo-500 text-7xl text-center font-inter font-extrabold">Safety</p>
                        <p className="text-gray-900 text-7xl text-center font-inter font-extrabold">Tracker</p>
                    </div>
                    <div className="ml-8">
                        <svg fill="#0b1a29" xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path d="M7 13.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm9 1c0-.276-.224-.5-.5-.5h-7c-.276 0-.5.224-.5.5s.224.5.5.5h7c.276 0 .5-.224.5-.5zm4-1c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5zm-17.298-6.5h-2.202c-.276 0-.5.224-.5.5v.511c0 .793.926.989 1.616.989l1.086-2zm19.318 3.168c-.761-1.413-1.699-3.17-2.684-4.812-.786-1.312-1.37-1.938-2.751-2.187-1.395-.25-2.681-.347-4.585-.347s-3.19.097-4.585.347c-1.381.248-1.965.875-2.751 2.187-.981 1.637-1.913 3.382-2.684 4.812-.687 1.273-.98 2.412-.98 3.806 0 1.318.42 2.415 1 3.817v2.209c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-1h13v1c0 .552.448 1 1 1h1.5c.552 0 1-.448 1-1v-2.209c.58-1.403 1-2.499 1-3.817 0-1.394-.293-2.533-.98-3.806zm-15.641-3.784c.67-1.117.852-1.149 1.39-1.246 1.268-.227 2.455-.316 4.231-.316s2.963.088 4.231.316c.538.097.72.129 1.39 1.246.408.681.81 1.388 1.195 2.081-1.456.22-4.02.535-6.816.535-3.048 0-5.517-.336-6.805-.555.382-.686.779-1.386 1.184-2.061zm11.595 10.616h-11.948c-1.671 0-3.026-1.354-3.026-3.026 0-1.641.506-2.421 1.184-3.678 1.041.205 3.967.704 7.816.704 3.481 0 6.561-.455 7.834-.672.664 1.231 1.166 2.01 1.166 3.646 0 1.672-1.355 3.026-3.026 3.026zm5.526-10c.276 0 .5.224.5.5v.511c0 .793-.926.989-1.616.989l-1.086-2h2.202z" /></svg></div>
                </div>

                <div className="mt-10">
                    <div className="w-full md:w-3/5">
                        <p className="font-inter font-medium text-gray-800 mb-5">Condições gerais do trajeto:</p>
                        <div className="md:flex inline-block">
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="daytime-label">Horário</InputLabel>
                                <Select labelId="daytime-label" id="daytime-select" value={daytime} onChange={(event) => updateDaytime(event.target.value)} label="Horário" >
                                    {possibleDaytime.map((time) => {
                                        return <MenuItem value={time.value}>{time.label}</MenuItem>;
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                                <InputLabel id="weekday-label">Dia da semana</InputLabel>
                                <Select labelId="weekday-label" id="weekday-select" value={weekday} onChange={(event) => setWeekday(event.target.value)} label="BR" >
                                    {possibleWeekday.map((weekday) => {
                                        return <MenuItem value={weekday.value}>{weekday.label}</MenuItem>;
                                    })}
                                </Select>
                            </FormControl>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
                                <InputLabel id="weather-label">Condições meteorológicas</InputLabel>
                                <Select labelId="weather-label" id="weather-select" value={weather} onChange={(event) => setWeather(event.target.value)} label="Condições meteorológicas" >
                                    {possibleWeather.map((weather) => {
                                        return <MenuItem value={weather.value}>{weather.label}</MenuItem>;
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="w-full">
                            <div>
                                <p className="font-inter text-gray-800 font-bold">Sua rota:</p>
                                {routes.map((route, index) => {
                                    return <Route routes={routes} setRoutes={setRoutes} index={index} br={route.br} estado={route.estado} cidade={route.cidade} />
                                })}
                                <div className="mt-4">
                                    <BRDialog routes={routes} setRoutes={setRoutes} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-10 mt-10">
                    <button className="bg-indigo-500 w-full rounded-md py-2 px-4 text-white font-semibold" onClick={() => { if (allowClick) { classify() }; setAllowClick(false); }}>CLASSIFICAR</button>
                </div>
            </div>
        </div>
    )
}
