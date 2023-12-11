import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import "./Weather.css";



export default function Weather(props){
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description, 
            date: new Date(response.data.dt *1000),
            icon: response.data.weather[0].icon,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name
           
        });
    } 

    function search(){
        const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }
    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }
    if (weatherData.ready){
        return(
       
            <div className="weather-container">
                    <div>
                        <div className="App">
                            <div>
                                <div className="clearfix">
                                    <form className="float-left" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-9">
                                        <input type="text" placeholder="Enter a city" autoComplete="off" autoFocus="on" onChange={handleCityChange}/>
                                        </div>
                                        <div className="col-3">
                                        <input type="submit" className="btn btn-primary" value="Search"/>
                                        </div>
                                       
                                        
                                        </div>
                                    </form>
                                    <WeatherInfo data= {weatherData} />
                                    </div>
                               
                            </div>
                        </div>
            </div>
           
        </div>
        
    );
    } else {
        search();
        return(
            "Loading..."
            );
    }
    
}