import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import ReactAnimatedWeather from 'react-animated-weather';
import "./Weather.css";



export default function Weather(props){
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            temperature: response.data.main.temp,
            description: response.data.weather[0].description, 
            date: new Date(response.data.dt *1000),
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name
           
        })
        setReady(true);
    } 
    let Sunny = {
        icon: 'CLEAR_DAY',
        color: 'black',
        size: 56,
        animate: true
      };

      let Cloudy = {
        icon: 'CLOUDY',
        color: 'black',
        size: 56,
        animate: true
      };

      let Rain = {
        icon: 'RAIN',
        color: 'black',
        size: 56,
        animate: true
      };

      let Wind = {
        icon: 'WIND',
        color: 'black',
        size: 56,
        animate: true
      };


    if (ready){
        return(
       
            <div className="weather-container">
                    <div>
                        <div className="App">
                            <div>
                                <div className="clearfix">
                                    <form className="float-left">
                                        <div className="row form">
                                            <div className="col-6">
                                        <input type="text" placeholder="Enter a city" autoComplete="off" autoFocus="on"/>
                                        </div>
                                        <div className="col-3">
                                        <input type="submit" className="btn btn-primary" value="Search"/>
                                        </div>
                                        <div className="col-3">
                                        <button className="float-left btn btn-success">Current</button>
                                        </div>
                                        
                                        </div>
                                    </form>
                                    
                                    </div>
                                <div className="weather-summary">
                                    <div className="weather-summary-header"> 
                                    <h1>
                                        {weatherData.city}
                                    </h1>
                                    <div className="weather-detail__text"><FormattedDate date={weatherData.date}/>
                                    </div>
                                    <div className="text-capitalize weather-detail__text">{weatherData.description}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="clearfix d-flex">
                                                <div className="float-left weather-icon">
                                                <ReactAnimatedWeather
                                                icon={Sunny.icon}
                                                color={Sunny.color}
                                                size={Sunny.size}
                                                animate={Sunny.animate}
                                                />
                                                </div>
                                                <div className="weather-temp weather-temp-today"> 
                                                {Math.round(weatherData.temperature)}
                                                </div>
                                                <div className="weather-unit__text weather-unit__text--today">°C</div>

                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="weather-detail__text">
                                                Precipitation: %
                                            </div>
                                            <div className="weather-detail__text">
                                                Wind: {Math.round(weatherData.wind)} km/h
                                            </div>
                                            <div className="weather-detail__text">
                                                humidity: {weatherData.humidity}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                        <div className="forecast-day">Mon</div>
                                        <div className="forecast-icon">
                                        <ReactAnimatedWeather
                                                icon={Cloudy.icon}
                                                color={Cloudy.color}
                                                size={Cloudy.size}
                                                animate={Cloudy.animate}
                                                />
                                        </div>
                                        <div className="forecast-temperature">
                                            15°
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="forecast-day">Tue</div>
                                        <div className="forecast-icon">
                                        <ReactAnimatedWeather
                                                icon={Sunny.icon}
                                                color={Sunny.color}
                                                size={Sunny.size}
                                                animate={Sunny.animate}
                                                />
                                        </div>
                                        <div className="forecast-temperature">
                                            10°
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="forecast-day">Wed</div>
                                        <div className="forecast-icon">
                                        <ReactAnimatedWeather
                                                icon={Rain.icon}
                                                color={Rain.color}
                                                size={Rain.size}
                                                animate={Rain.animate}
                                                />
                                        </div>
                                        <div className="forecast-temperature">
                                            12°
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="forecast-day">Thu</div>
                                        <div className="forecast-icon">
                                        <ReactAnimatedWeather
                                                icon={Sunny.icon}
                                                color={Sunny.color}
                                                size={Sunny.size}
                                                animate={Sunny.animate}
                                                />
                                        </div>
                                        <div className="forecast-temperature">
                                            18°
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="forecast-day">Fri</div>
                                        <div className="forecast-icon">
                                        <ReactAnimatedWeather
                                                icon={Wind.icon}
                                                color={Wind.color}
                                                size={Wind.size}
                                                animate={Wind.animate}
                                                />
                                        </div>
                                        <div className="forecast-temperature">
                                            25°
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
            </div>
           
        </div>
        
    );
    } else {
         
    const apiKey = "c6f8ef4575250284954db9f4dfa7a996";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return(
        "Loading..."
    );
    }
    
}