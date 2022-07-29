import Weather from "./findWeather";
import {convertToCelcius} from "./findWeather";

function DayWeather(props) {
    console.log(props.day, 'day')

   
    return (
        
        <div id='day-div'>
        <h4>{props.city}</h4>
        <p>{props.day[0] ? props.day[0].weather[0].description : 'not loaded'}</p>
        <p>{props.day[0] ? convertToCelcius(props.day[0].main.temp_min) + ' min temp' : 'not loaded'}</p>
        <p>{props.day[0] ? convertToCelcius(props.day[0].main.temp_max) + ' max temp': 'not loaded'}</p>
        </div>
        );


}



export default DayWeather
