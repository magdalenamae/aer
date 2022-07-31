import { useState } from "react";
import Weather, {convertToCelcius} from "./findWeather";
import { formatDate } from "./dayWeather";

function WeekWeather(props) {
  let currentDay = props.week[0]
  let currentIndex = 0
  let daysOfWeek = [[], [], [], [], []]
  let daysOfTheWeekWeather = []
  let dayData = [[], [], [], [], []]
  let dates = [[], [], [], [], []]

  for (let day of props.week){
   if (currentDay.dt_txt.slice(0,10) === day.dt_txt.slice(0,10)){
    daysOfWeek[currentIndex].push(day.main.temp)
    dayData[currentIndex].push(day.dt_txt.slice(0,10)) 
   } else {
    currentIndex ++ 
    currentDay = day
    daysOfWeek[currentIndex].push(day.main.temp)
    dayData[currentIndex].push(day.dt_txt.slice(0,10)) 
   }
  }
  
  // instead of averaging the temperatures, i need to find the lowest and highest temperatures for each day
  for( let dayWeather of daysOfWeek){ 
    let sum = 0
    for (let number of dayWeather) {
      sum += number;
    }
    let average = sum / dayWeather.length;
    let celAve = convertToCelcius(average)
    daysOfTheWeekWeather.push(celAve)
  }
  
  return (
    <div>
       
     {/* Instead of looping over the average days i need to loop over the min and max days as well as the date,. so i need them to both be in the same fucntion*/}
        {daysOfTheWeekWeather.map((day, index) => {
            return (
              <div id='week-div'>
                <h4>{dayData[0][index]}</h4>
                <p>Average tempreature{day}</p>
              </div>
            )
            })}
       
    </div>
  );
  }

export default WeekWeather;