import Weather from "./findWeather";
import {convertToCelcius} from "./findWeather";
import sunny from './images/sunny.png';
import cloud from './images/cloud.png';
import sun_rain from './images/sun_rain.png';
import cloudy_rain from './images/cloudy_rain.png';
import snow from './images/snow.png';
import sunny_clouds from './images/sunny_clouds.png';
import thunder from './images/thunderstorm.png';
import rain from './images/rain.png';
import lightRain from './images/light_rain.png';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export function formatDate (date){
    let updatedDate = date * 1000
    const newDateObj = new Date(updatedDate)
    const formateDateObj = newDateObj.toLocaleDateString()
    return formateDateObj
}
// general formula from https://stackoverflow.com/questions/13898423/javascript-convert-24-hour-time-of-day-string-to-12-hour-time-with-am-pm-and-no
const formatTime = (time) => {
    // Prepend any date. Use your birthday.
    const timeString = new Date('1970-01-01T' + time + 'Z')
    .toLocaleTimeString('en-US',
        {timeZone:'UTC',hour:'numeric'}
    );
    return timeString;
}

function DayWeather(props) {
   
    console.log(props.day)
    return props.day.map((hour, index) => {
        return (
            <Row key={index} id='day-div' data-testid='day-weather'>
            <Col>{formatTime(hour.dt_txt.slice(11,20))}</Col>
            <Col>
                {
                (hour.weather[0].description === 'sunny') ? <img src={sunny} alt='im' id='img'/> : 
                (hour.weather[0].description === 'light rain') ? <img src={lightRain} alt='im' id='img'/> : 
                (hour.weather[0].description === 'rain') ? <img src={rain} alt='im' id='img'/> :
                (hour.weather[0].description === 'snow') ? <img src={snow} alt='im' id='img'/> :
                (hour.weather[0].description === 'clouds') ? <img src={sunny_clouds} alt='im' id='img'/> :
                (hour.weather[0].description === 'thunderstorm') ? <img src={thunder} alt='im' id='img'/> :
                (hour.weather[0].description === 'clear') ? <img src={sunny} alt='im' id='img'/> :
                (hour.weather[0].description === 'mist') ? <img src={cloud} alt='im' id='img'/> :
                (hour.weather[0].description=== 'scattered clouds') ? <img src={cloud} alt='im' id='img'/> :
                (hour.weather[0].description === 'broken clouds') ? <img src={cloud} alt='im' id='img'/> :
                (hour.weather[0].description === 'few clouds') ? <img src={cloud} alt='im' id='img'/> :
                (hour.weather[0].description === 'overcast clouds') ? <img src={cloud} alt='im' id='img'/> :
                (hour.weather[0].description === 'shower rain') ? <img src={rain} alt='im' id='img'/> :
                (hour.weather[0].description === 'moderate rain') ? <img src={rain} alt='im' id='img'/> :
                (hour.weather[0].description === 'heavy intensity rain') ? <img src={rain} alt='im' id='img'/> :
                (hour.weather[0].description === 'light intensity shower rain') ? <img src={rain} alt='im' id='img'/> :
                (hour.weather[0].description === 'heavy intensity shower rain') ? <img src={rain} alt='im' id='img'/> :     
                (hour.weather[0].description === 'light thunderstorm') ? <img src={thunder} alt='im' id='img'/> :
                (hour.weather[0].description === 'heavy thunderstorm') ? <img src={thunder} alt='im' id='img'/> :
                (hour.weather[0].description === 'thunderstorm with rain') ? <img src={thunder} alt='im' id='img'/> :
                (hour.weather[0].description === 'thunderstorm with heavy rain') ? <img src={thunder} alt='im' id='img'/> :
                (hour.weather[0].description === 'thunderstorm with light rain') ? <img src={thunder} alt='im' id='img'/> :
                (hour.weather[0].description === 'clear sky') ? <img src={sunny} alt='im' id='img'/> :
                sunny } </Col>
            <Col>{hour ? convertToCelcius(hour.main.temp) : '22'}</Col>
            </Row>
            
            );
        })
}


export default DayWeather
