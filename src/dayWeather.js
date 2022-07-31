import Weather from "./findWeather";
import {convertToCelcius} from "./findWeather";
import sunny from './images/sunny.png';
import cloud from './images/cloud.png';
import sun_rain from './images/sun_rain.png';
import cloudy_rain from './images/cloudy_rain.png';
import snow from './images/snow.png';
import sunny_clouds from './images/sunny_clouds.png';
import thunder from './images/thunderstorm.png';
  
export const formatDate = (date) => {
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
        {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
    );
    return timeString;
}

function DayWeather(props) {
  
      
    return props.day.map(hour => {
        
        return (
            <div id='day-div'>
            <h4>{props.city}</h4> 
            <h4>{formatTime(hour.dt_txt.slice(11,20))}</h4>
            <h5>{hour ? formatDate(hour.dt) : 'not loaded'}</h5>
            <p>{(hour.description) ? hour.description : 'not loaded'}
            {(hour.description === 'sunny') ? <img src={sunny} alt='im' id='img'/> : 
            (hour.description === 'light rain') ? <img src={sun_rain} alt='im' id='img'/> : 
            (hour.description === 'rain') ? <img src={cloudy_rain} alt='im' id='img'/> :
            (hour.description === 'snow') ? <img src={snow} alt='im' id='img'/> :
            (hour.description === 'clouds') ? <img src={sunny_clouds} alt='im' id='img'/> :
            (hour.description === 'thunderstorm') ? <img src={thunder} alt='im' id='img'/> :
            (hour.description === 'clear') ? <img src={sunny} alt='im' id='img'/> :
            (hour.description === 'mist') ? <img src={cloud} alt='im' id='img'/> :
            (hour.description === 'scattered clouds') ? <img src={cloud} alt='im' id='img'/> :
            (hour.description === 'broken clouds') ? <img src={cloud} alt='im' id='img'/> :
            (hour.description === 'overcast clouds') ? <img src={cloud} alt='im' id='img'/> :null} </p>
            <p>{hour ? convertToCelcius(hour.main.temp) + ' temp' : 'not loaded'}</p>
            
            </div>
            
            );
        })
}


export default DayWeather
