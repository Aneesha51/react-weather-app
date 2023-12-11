import React from "react";
import WeatherIcon from "./Weathericon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props){

    function handleResponse(response){
        console.log(response.data);
    }
    console.log(props);

    let apiKey = "eae061c95483dd066657bfc7525418ed";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
    <div className="row">
        <div className="col-sm-2">
            <div className="forecast-day">Mon</div>
            <div className="forecast-icon">
            <WeatherIcon code="01d" size= {36} />
            </div>
            <div className="forecast-temperature">
                <span className="forecast-temperature-max"> 12°</span>
                <span className="forecast-temperature-min"> 9°</span>
                </div>
                </div>
                </div>
        </div>
    );
}