import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Form  from 'react-bootstrap/Form';
import {useState} from 'react';
import axios from 'axios';
import DayWeather from './dayWeather';
import WeekWeather from './weekWeather';
import MainDayWeather from './maindayweather';
import OnBoarding from './chooseLocation';
let apiKey =  'e2482dcf55ac11835a8095829524fb30'
let APIKEY = 'a56552bea5acf1354c8f9fe72e861c68'

export const convertToCelcius = (temp) => {
    return  Math.floor(temp - 273.15)  + ' °'
}

function Weather(){
    // const [location , setLocation] = useState('???')
    const [city , setCity] = useState('Melbourne')
    const [longitude , setLongitude] = useState(0)
    const [latitude , setLatitude] = useState(0)
    const [week , setWeek] = useState([])
    const [day , setDay] = useState([])
    const [daySelected , setDaySelected] = useState(0)
    const [citySelected , setCitySelected] = useState(0)
    const [tempMainSelected, setTempMainSelected] = useState(0)
    const [tempMinSelected, setTempMinSelected] = useState(0)
    const [tempMaxSelected, setTempMaxSelected] = useState(0)
    const [description, setDescription] = useState('')
    
    const handleCity = (e) => {
        setCity(e.target.value)
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
    const handleDaySelected = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => {
            // console.log(response.data , 'day data')
            setDaySelected(response.data)
            setCitySelected(response.data.name)
            setTempMainSelected(response.data.main.temp)
            setTempMinSelected(response.data.main.temp_min)
            setTempMaxSelected(response.data.main.temp_max)
            setDescription(response.data.weather[0].description)
          
        })
      }
    const displayWeather = () => {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?&lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => {
            setDay(response.data.list.slice(0,5))
            console.log(response.data , 'data')
            setWeek(response.data.list.slice(6))
        })
        handleDaySelected()
    }
  
    return (
        <div>  
            <style type="text/css">
        {`
    .btn-flat {
      background-color: #fecaca;
      borer: 1px solid #fecaca;
      color: #323A46;
      margin: 0.5rem 1rem;
    }

    .btn-xl {
      borer: 1px solid #fecaca;
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>
            <h1>AER</h1>
            <div id='set-weather'>
            <Form>
                <label>Enter your City<input type='text'  id='city' onChange={handleCity}></input></label>  
                <Button  variant="flat" size="xxs" onClick={GeolocationCoordinates}>Set City</Button>
                <Button variant="flat" size="xxs" onClick={displayWeather}>Display Weather</Button>
            </Form>
            </div>
            <MainDayWeather
            day={daySelected}
            city={citySelected}
            temp={tempMainSelected}
            min_temp={tempMinSelected}
            max_temp={tempMaxSelected}
            description={description}
            />
            <div id='day-div-container'>
           <DayWeather
            setDay={setDay}
            city={city}
            day={day}
            convertToCelcius={convertToCelcius}
           />
           </div>
           <WeekWeather
            setWeek={setWeek}
            week={week}
            city={city}
            convertToCelcius={convertToCelcius}
            />
        </div>
    )
}


export default Weather;
console.log('working repo')
