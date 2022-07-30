
import {convertToCelcius} from "./findWeather";

function WeekWeather(props) {
  let currentDay = props.week[0]
  let currentIndex = 0
  let daysOfWeek = [[], [], [], [], []]
  for (let day of props.week){
  
   if (currentDay.dt_txt.slice(0,10) === day.dt_txt.slice(0,10)){
    daysOfWeek[currentIndex].push(day.main.temp)
   } else {
    currentIndex ++ 
    currentDay = day
    daysOfWeek[currentIndex].push(day.main.temp)
   }
  }
  console.log(daysOfWeek, 'days of week')
  // console.log(props.week, 'week') 
  return (
    <div>
        {/* {props.week.map((day, index) => {
         
 
            return (
                <div id='week-div'>
                    <h4>{props.city}</h4>
                    <p>{day.weather[0].description}</p>
                    <p>{convertToCelcius(day.main.temp_max)} max temp</p>
                    <p>{day.dt_txt}</p>
                    <p>{convertToCelcius(day.main.temp_min)} min temp</p>
                </div>
            )
            })} */}
       
    </div>
  );
  }

export default WeekWeather;