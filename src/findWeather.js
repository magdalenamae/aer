
import {useState} from 'react';
import axios from 'axios';

import DayWeather from './dayWeather';
import WeekWeather from './weekWeather';
import MainDayWeather from './maindayweather';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col , Container, Button} from 'react-bootstrap';

import Form  from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

// const apiKey = process.env.REACT_APP_API_KEY
// console.log(apiKey)
let apiKey = 'e2482dcf55ac11835a8095829524fb30'
export const convertToCelcius = (temp) => {
    return  Math.floor(temp - 273.15)  + '°'
}




function Weather(){
    // const [location , setLocation] = useState('???')
    const [city , setCity] = useState('Melbourne')
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

    const GeolocationCoordinates = (event) => {
        event.preventDefault();
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`)
        .then(response => {
          
            setCity(response.data[0].name)
            let latitude = response.data[0].lat
            let longitude = response.data[0].lon
           
                axios.get(`https://api.openweathermap.org/data/2.5/forecast?&lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
                    .then(response => {
                        setDay(response.data.list.slice(0,5))
                        setWeek(response.data.list.slice(6))
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
                    })

        })  
       
        
    }

  
    return (
        <Container fluid>  
            <Link id='main-header' to="/about">AER</Link>
         <Col>
            <MainDayWeather
            day={daySelected}
            city={citySelected}
            temp={tempMainSelected}
            min_temp={tempMinSelected}
            max_temp={tempMaxSelected}
            description={description}
            />
            </Col>
            <Row>
            <Col id='day-div-container'>
           <DayWeather
            setDay={setDay}
            city={city}
            day={day}
            convertToCelcius={convertToCelcius}
           />
           </Col>
           </Row>
              <Row>
           <WeekWeather
            setWeek={setWeek}
            week={week}
            city={city}
            convertToCelcius={convertToCelcius}
            />
            </Row>
            <Form id='weather-form'>
                <input type='text'  id='city' placeholder='Enter your City' onChange={handleCity}></input> 
                <button id='set-weather-button' type='submit' onClick={GeolocationCoordinates}>Set Weather</button>
            </Form>
        </Container>
        
    )
}
export default Weather
console.log('working repo')
