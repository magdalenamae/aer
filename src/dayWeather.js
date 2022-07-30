import Weather from "./findWeather";
import {convertToCelcius} from "./findWeather";

function DayWeather(props) {
   
    
    return props.day.map(hour => {
        return (
            
            <div id='day-div'>
            <h4>{props.city}</h4> 
            <p>{hour ? hour.weather.description : 'not loaded'}</p>
            <p>{hour ? convertToCelcius(hour.main.temp_min) + ' min temp' : 'not loaded'}</p>
            <p>{hour ? convertToCelcius(hour.main.temp_max) + ' max temp': 'not loaded'}</p>
          
            </div>
            
            );
        })
}


export default DayWeather
