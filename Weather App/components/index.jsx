import axios from "axios"
import React, { useState } from "react"
import '../index.css'
export default function Index(){
    let [city,setcity]=useState("")
    let [resultTempuratureCity,setresultTempuratureCity]=useState([])
    let [error,seterror]=useState("")
    const searchTempCity = () =>{
        axios.get(`http://api.weatherapi.com/v1/current.json?key=7b86cd98cf18466fb8e175418251902&q=${city}&aqi=no`).then((resp)=>{
            if(resp.status == 200){
                setresultTempuratureCity([resp.data])
                document.getElementById("city").textContent = city;
            }
        }).catch((error)=>{
            seterror(error)
        })
    }
    console.log(city)
    console.log(resultTempuratureCity)
    console.log(error)
    return <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
        <div className="bg-white text-center p-5 rounded-lg">        
            <p className="text-3xl font-bold text-black">🌦 Weather App</p>
            <div className="p-5">
                <input type="text" placeholder="Write Your City" name="city" className="m-3 py-2 px-3 w-64 rounded-full bg-gray-100 font-mono" onChange={(event)=>(setcity(event.target.value))}/>
                <button type="button" onClick={searchTempCity} className="bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-19"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div>
                {
                    resultTempuratureCity && resultTempuratureCity.length == 0 
                    ?
                    <img src="meteopicture.png" className="mx-auto w-64" alt="" />
                    :
                    resultTempuratureCity && resultTempuratureCity.map((i)=>{
                        return <img src={i.current.condition.icon} className="mx-auto w-56" alt="" />

                    })
                }
            </div>
            <div>
                {
                    resultTempuratureCity && resultTempuratureCity.map((i)=>{
                        return <><p className="text-6xl text-black" id="degre_city">{i.current.temp_c } <text className="text-4xl text-black">°C</text> </p></>

                    })
                }
            </div>
            <div className="text-2xl mt-2 text-black">
                <strong id="city"></strong>
            </div>
            <div className="flex">
                <div>
                {
                    resultTempuratureCity && resultTempuratureCity.map((i)=>{
                        return <div className="text-black grid grid-cols-2 gap-20 ml-9">
                            <div>
                                <div className="mt-4" id="v_h"><p>💧 {i.current.humidity} <>%</> </p></div>
                                <div id="v_h">Humidity</div>
                            </div>
                            <div>
                                <div className="mt-4" id="v_h"><p className="text-black">💨 {i.current.wind_kph} <>Km/h</> </p></div>
                                <div id="v_h">Vent</div>
                            </div> 
                        </div>
                    })
                }
                </div>
            </div>
        </div>
    </div>
}