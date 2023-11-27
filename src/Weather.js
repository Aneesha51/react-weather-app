import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import ReactAnimatedWeather from 'react-animated-weather';
import "./Weather.css";


export default function Weather(){
    const Sunny = {
        icon: 'CLEAR_DAY',
        color: 'black',
        size: 56,
        animate: true
      };

      const Cloudy = {
        icon: 'CLOUDY',
        color: 'black',
        size: 56,
        animate: true
      };

      const Rain = {
        icon: 'RAIN',
        color: 'black',
        size: 56,
        animate: true
      };

      const Wind = {
        icon: 'WIND',
        color: 'black',
        size: 56,
        animate: true
      };


    return(
        <div className="container">
            <div className="weather-container">
                <div>
                    <header>
                        <ul className="navigation-items">
                            <li className="navigation-items"> <a href="/spain">Spain</a></li>
                            <li className="navigation-items"> <a href="/france">France</a></li>
                            <li className="navigation-items"> <a href="/india">India</a></li>
                            <li className="navigation-items"> <a href="/South Africa">South Africa</a></li>
                        </ul>
                    </header>
                    <div>
                        <div className="App">
                            <div>
                                <div className="clearfix">
                                    <form className="float-left">
                                        <input type="text" placeholder="Enter a city" autoComplete="off"/>
                                        <input type="submit" className="btn btn-primary" value="Search"/>
                                        <button className="float-left btn btn-success">Current</button>
                                    </form>
                                    
                                </div>
                                <div className="weather-summary">
                                    <div className="weather-summary-header"> 
                                    <h1>
                                        Johannesburg
                                    </h1>
                                    <div className="weather-detail__text">Sunday 22:58</div>
                                    <div className="weather-detail__text">Sunny</div>
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
                                                14
                                                </div>
                                                <div className="weather-unit__text weather-unit__text--today">°C</div>

                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="weather-detail__text">
                                                Precipitation: 84%
                                            </div>
                                            <div className="weather-detail__text">
                                                Wind: 1km/h
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
            </div>
            <small>
                <a href="https://github.com/Aneesha51">Open-source code</a>
                <span>, by </span>
                <a href="https://www.linkedin.com/in/aneesha-rangan-41b171196">Aneesha Rangan</a>
            </small>
        </div>
        
    )
}