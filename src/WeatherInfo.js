import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./Weathericon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    
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
                                                <div className="float-left"> 
                                                <WeatherTemperature celsius={props.data.temperature}/>
                                                </div>
                                               

                                            </div>
                                        </div>
                                        <div className="col-sm-6 weather-info">
                                            <div className="weather-detail__text">
                                                Wind: {Math.round(props.data.wind)} km/h
                                            </div>
                                            <div className="weather-detail__text">
                                                humidity: {props.data.humidity} %
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
    );
}