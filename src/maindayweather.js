import Weather from "./findWeather";
import {convertToCelcius} from "./findWeather";
function MainDayWeather(props) {
    // console.log(props.day.main, 'day')
    return (
        <div id='main-day-weather'>
            <h5 id="city-name">{props.day ? props.day.name : 'not loaded'}</h5>
            <h1>{props.temp ? convertToCelcius(props.temp) : 'not loaded'}</h1>
            <p>{props.description ? props.description : 'not loaded'}</p>
            <p>{props.max_temp ? convertToCelcius(props.max_temp) : 'not loaded'}</p>
            <p>{props.min_temp ? convertToCelcius(props.min_temp) : 'not loaded'}</p>
        </div>
    );
}


export default MainDayWeather;

 