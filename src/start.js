import {useState} from 'react';
import axios from 'axios';

let apiKey =  'e2482dcf55ac11835a8095829524fb30'

function Weather(){
    // const [location , setLocation] = useState('???')
    const [city , setCity] = useState('Melbourne')
    const [longitude , setLongitude] = useState(0)
    const [latitude , setLatitude] = useState(0)
    const [day, setDay] = useState('???')
    const [temp, setTemp] = useState('???') 
    const [description, setDescription] = useState('???')
    const [humidity, setHumidity] = useState('???')
    
    const handleCity = (e) => {
        setCity(e.target.value)
    }
    const convertToCelcius = (temp) => {
        return  temp - 273.15 + '°C'
    }

    const GeolocationCoordinates = () =>{
        axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
        .then(response => {
           console.log('reaching axios')
            console.log(response.data)
            setCity(response.data[0].name)
            setLatitude(response.data[0].lat)
            setLongitude(response.data[0].lon)
            console.log(response.data[0].name, response.data[0].lat, response.data[0].lon)
        })   
    }
    const displayWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?cnt=5&lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => {
            console.log('reaching 2nd axios')
            response.data.list.map((item) => {
                console.log(item)
                setDescription(item.weather[0].description)
                setTemp(item.main.temp)
                setHumidity(item.main.humidity)
                setDay(item.dt_txt)
               return item.weather[0].description
            }) 
            return (<weatherDeails>
                
            </weatherDeails> )
        })    
    }
    return (
        <div>
            <h1>AER</h1>
            <label>Enter your City<input type='text'  id='city' onChange={handleCity}></input></label>  
            <h3>{city}</h3>
            <ol>{day}</ol>
            <ol>{description}</ol>
            <ol>{'Humidity '+ humidity + ' %'}</ol>
            <ol> {convertToCelcius(temp)}</ol>
            <button id='submit-btn' onClick={GeolocationCoordinates}>Set City</button>
            <button onClick={displayWeather}>Display Weather</button>
        </div>
    )
}


export default Weather;
console.log('working repo')
