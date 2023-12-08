import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./Weathericon";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherInfo(props) {
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

    return (
        <div className="WeatherInfo">
             <div className="weather-summary">
                                    <div className="weather-summary-header"> 
                                    <h1>
                                        {props.data.city}
                                    </h1>
                                    <div className="weather-detail__text"><FormattedDate date={props.data.date}/>
                                    </div>
                                    <div className="text-capitalize weather-detail__text">{props.data.description}</div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="clearfix d-flex">
                                                <div className="float-left weather-icon">
                                                <WeatherIcon code={props.data.icon} size= {58} />
                                                </div>
                                                <div className="weather-temp weather-temp-today"> 
                                                {Math.round(props.data.temperature)}
                                                </div>
                                                <div className="weather-unit__text weather-unit__text--today">°C</div>

                                            </div>
                                        </div>
                                        <div className="col-sm-6 weather-info">
                                            <div className="weather-detail__text">
                                                Precipitation: %
                                            </div>
                                            <div className="weather-detail__text">
                                                Wind: {Math.round(props.data.wind)} km/h
                                            </div>
                                            <div className="weather-detail__text">
                                                humidity: {props.data.humidity}
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
    );
}