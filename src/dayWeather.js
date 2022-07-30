import Weather from "./findWeather";
import {convertToCelcius} from "./findWeather";

function DayWeather(props) {
    
   const formateDate = (date) => {
        let updatedDate = date * 1000
        const newDateObj = new Date(updatedDate)
        const formateDateObj = newDateObj.toLocaleDateString()
        return formateDateObj
   }
      
    return props.day.map(hour => {
        console.log(hour, 'hour')
        return (
            <div id='day-div'>
            <h4>{props.city}</h4> 
            <h5>{hour ? formateDate(hour.dt) : 'not loaded'}</h5>
            <p>{hour ? hour.weather.description : 'not loaded'}</p>

            <p>{hour ? convertToCelcius(hour.main.temp) + ' temp' : 'not loaded'}</p>
            
            </div>
            
            );
        })
}


export default DayWeather
