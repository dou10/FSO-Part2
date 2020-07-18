import React, {useEffect, useState} from 'react'
import Axios from 'axios'


//31e0f71bb1ad4f26fa52d538a95d4c4d
const Weather = (props) => {

    const [weather, setWeather] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    

    useEffect(() => {
        Axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${props.name}`)
        .then(response => {
            console.log('promise fulllied')
            setWeather(response.data.current)
        })
        
    },[props.name])

    //console.log(weather.temperature)
    return(
        <div>
            <h2>Weather in {props.name} </h2>
            <div>
                <b>temperature:</b> {weather.temperature} Celcuius
            </div>
            <img src = {weather.weather_icons}></img>
            <div>
                <b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}
            </div>
        </div>
    )
}

export default Weather