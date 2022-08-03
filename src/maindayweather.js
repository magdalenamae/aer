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
import { Row, Col, Container } from 'react-bootstrap';


function MainDayWeather(props) {
    return (
        <Container fluid id='main-day-weather'>
            <Col id="city-name" data-testid='city-test'>{props.day ? props.day.name : 'not loaded'}</Col>
            <Col id='temp-header'>{props.temp ? convertToCelcius(props.temp) : 'not loaded' }</Col>
            <Row >
                {(props.description) ? props.description : 'not loaded'}
             <Row>
            <Col id='max-temp'> H {props.max_temp ? convertToCelcius(props.max_temp) : 'not loaded'}</Col>
            <Col id='min-temp'> L  { props.min_temp ? convertToCelcius(props.min_temp) : 'not loaded'}</Col>
            </Row>
            {(props.description === 'sunny') ? <img src={sunny} alt='im' id='img' className="main-img"/> : 
            (props.description === 'light rain') ? <img src={lightRain} alt='im' id='img' className="main-img"/> : 
            (props.description === 'rain') ? <img src={cloudy_rain} alt='im' id='img' className="main-img"/> :
            (props.description === 'snow') ? <img src={snow} alt='im' id='img' className="main-img"/> :
            (props.description === 'clouds') ? <img src={sunny_clouds} alt='im' id='img' className="main-img"/> :
            (props.description === 'thunderstorm') ? <img src={thunder} alt='im' id='img' className="main-img"/> :
            (props.description === 'clear') ? <img src={sunny} alt='im' id='img' className="main-img"/> :
            (props.description === 'clear sky') ? <img src={sunny} alt='im' id='img' className="main-img"/> :
            (props.description === 'mist') ? <img src={cloud} alt='im' id='img' className="main-img"/> :
            (props.description === 'scattered clouds') ? <img src={cloud} alt='im' id='img' className="main-img"/> :
            (props.description === 'broken clouds') ? <img src={cloud} alt='im' id='img' className="main-img"/> :
            (props.description === 'overcast clouds') ? <img src={cloud} alt='im' id='img' className="main-img"/> :
            (props.description === 'shower rain') ? <img src={rain} alt='im' id='img' className="main-img"/> :
            (props.description === 'moderate rain') ? <img src={rain} alt='im' id='img' className="main-img"/> :
            (props.description === 'light intensity shower rain') ? <img src={rain} alt='im' id='img' className="main-img"/> :
            (props.description === 'heavy intensity rain') ? <img src={rain} alt='im' id='img' className="main-img"/> :
            (props.description === 'few clouds') ? <img src={cloud} alt='im' id='img' className="main-img"/> :
           null}
           </Row>
        </Container>
       
    );
}


export default MainDayWeather;

 