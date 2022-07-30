import { useState } from "react";
import {convertToCelcius} from "./findWeather";

function WeekWeather(props) {
  let currentDay = props.week[0]
  let currentIndex = 0
  let daysOfWeek = [[], [], [], [], []]
  let daysOfTheWeekWeather = []
 
  for (let day of props.week){
    
   if (currentDay.dt_txt.slice(0,10) === day.dt_txt.slice(0,10)){
    daysOfWeek[currentIndex].push(day.main.temp)
   } else {
    currentIndex ++ 
    currentDay = day
    daysOfWeek[currentIndex].push(day.main.temp)
   }
  }
  for( let dayWeather of daysOfWeek){ 
    let sum = 0
    for (let number of dayWeather) {
      sum += number;
    }
    let average = sum / dayWeather.length;
    let celAve = convertToCelcius(average)
    daysOfTheWeekWeather.push(celAve)
    console.log(daysOfTheWeekWeather)
  }
  // console.log(props.week, 'week') 
  return (
    <div>
        {daysOfTheWeekWeather.map((day, index) => {
            return (
              <div id='week-div'>
                <p>Average tempreature{day}</p>
              </div>
            )
            })}
       
    </div>
  );
  }

export default WeekWeather;