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
        console.log(hour.weather[0].description, 'hour')
        return (
            <div id='day-div'>
  
            <h6>{formatTime(hour.dt_txt.slice(11,20))}</h6>
          
            <h4>{(hour.weather[0].description) ? hour.weather[0].description : 'not loaded'}
                {(hour.weather[0].description === 'sunny') ? <img src={sunny} alt='im' id='img'/> : 
                (hour.weather[0].description === 'light rain') ? <img src={lightRain} alt='im' id='img'/> : 
                (hour.weather[0].description === 'rain') ? <img src={rain} alt='im' id='img'/> :
                (hour.weather[0].description === 'snow') ? <img src={snow} alt='im' id='img'/> :
                (hour.weather[0].description === 'clouds') ? <img src={sunny_clouds} alt='im' id='img'/> :
                (hour.weather[0].description === 'thunderstorm') ? <img src={thunder} alt='im' id='img'/> :
                (hour.weather[0].description === 'clear') ? <img src={sunny} alt='im' id='img'/> :
                (hour.weather[0].description === 'mist') ? <img src={cloud} alt='im' id='img'/> :
                (hour.weather[0].description=== 'scattered clouds') ? <img src={cloud} alt='im' id='img'/> :
                (hour.weather[0].description === 'broken clouds') ? <img src={cloud} alt='im' id='img'/> :
                (hour.weather[0].description === 'overcast clouds') ? <img src={cloud} alt='im' id='img'/> :
                (hour.weather[0].description === 'shower rain') ? <img src={rain} alt='im' id='img'/> :
                (hour.weather[0].description === 'moderate rain') ? <img src={rain} alt='im' id='img'/> :
                (hour.weather[0].description === 'heavy intensity rain') ? <img src={rain} alt='im' id='img'/> :
                null} </h4>
                
            <h4>{hour ? convertToCelcius(hour.main.temp) + ' temp' : 'not loaded'}</h4>
            
            </div>
            
            );
        })
}


export default DayWeather
