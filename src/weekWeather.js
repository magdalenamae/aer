import Weather from "./findWeather";
import {convertToCelcius} from "./findWeather";

function WeekWeather(props) {
    
  
   
  console.log(props.week, 'week') 
  return (
    <div>
        {props.week.map((day, index) => {
          // console.log(day)
            return (
                <div id='week-div'>
                    <h4>{props.city}</h4>
                    <p>{day.weather[0].description}</p>
                    <br></br>
                    <p>{convertToCelcius(day.main.temp_max)} max temp</p>
                    <br></br>
                    <p>{convertToCelcius(day.main.temp_min)} min temp</p>
                </div>
            )
            })}
       
    </div>
  );
  
}

export default WeekWeather;