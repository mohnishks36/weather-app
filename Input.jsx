import React from "react";
import { useWeather } from "../context/Weather";
export const Input=()=>{
   const weather=useWeather();
     return(
        <input 
        className="input-field"
        placeholder="Search Here"
        value={weather.value}
        onChange={(e)=>weather.setSearchCity(e.target.value)}
        />
     )
}