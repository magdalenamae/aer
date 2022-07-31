import { useState } from "react";
import {convertToCelcius} from "./findWeather";
import { formatDate } from "./dayWeather";
import sunny from './images/sunny.png';
import cloud from './images/cloud.png';
import sun_rain from './images/sun_rain.png';
import cloudy_rain from './images/cloudy_rain.png';
import snow from './images/snow.png';
import sunny_clouds from './images/sunny_clouds.png';
import thunder from './images/thunderstorm.png';
import rain from './images/rain.png';
import lightRain from './images/light_rain.png';

function WeekWeather(props) {
  let currentDay = props.week[0]
  let currentIndex = 0
  let daysOfWeek = [[], [], [], [], []]
  let daysOfTheWeekWeather = []
  let dayData = [[], [], [], [], []]
  let dayWeather = [[], [], [], [], []]
  let dayMin = [[], [], [], [], []]
  let minTemps = []
  let dayMax = [[], [], [], [], []]
  let maxTemps = []
  let dayDesc = [[], [], [], [], []]
  let descriptions = []
  
// for loop to create mutipul arrays of the week data and weather data
  for (let day of props.week){
   if (currentDay.dt_txt.slice(0,10) === day.dt_txt.slice(0,10)){
    daysOfWeek[currentIndex].push(day.main.temp)
    dayData[currentIndex].push(day.dt_txt.slice(0,10)) 
    dayWeather[currentIndex].push(day.weather[0].description)
    dayMin[currentIndex].push(day.main.temp_min)
    dayMax[currentIndex].push(day.main.temp_max)
    dayDesc[currentIndex].push(day.weather[0].description)
   } else {
    currentIndex ++ 
    currentDay = day
    daysOfWeek[currentIndex].push(day.main.temp)
    dayData[currentIndex].push(day.dt_txt.slice(0,10)) 
    dayWeather[currentIndex].push(day.weather[0].description)
    dayMin[currentIndex].push(day.main.temp_min)
    dayMax[currentIndex].push(day.main.temp_max)
    dayDesc[currentIndex].push(day.weather[0].description)
   }
  }
  //  for loop converting each day of the week to celcius and calculating the average
  for( let dayWeather of daysOfWeek){ 
    let sum = 0
    for (let number of dayWeather) {
      sum += number;
    }
    let average = sum / dayWeather.length;
    let celAve = convertToCelcius(average)
    daysOfTheWeekWeather.push(celAve)
  }
// for loop to convert each min temp day of the week to celcius and pushing it to an array
  for (let min of dayMin){
    let minimum = convertToCelcius(min[0])
    minTemps.push(minimum)
    console.log(minTemps)
  }
  // for loop to convert each max temp day of the week to celcius and pushing it to an array
  for (let max of dayMax){
    let maximum = convertToCelcius(max[0])
    maxTemps.push(maximum)
  }

  return (
    <div>
        {daysOfTheWeekWeather.map((day, index) => {
            return (
              <div class='card' id='week-div'>
                <h4>{dayData[index][index]}</h4>
                <p>{dayWeather[index][index]}</p>
                <p>
                {(dayDesc[index][index] === 'sunny') ? <img src={sunny} alt='im' id='img'/> : 
                (dayDesc[index][index] === 'light rain') ? <img src={lightRain} alt='im' id='img'/> : 
                (dayDesc[index][index] === 'rain') ? <img src={cloudy_rain} alt='im' id='img'/> :
                (dayDesc[index][index] === 'snow') ? <img src={snow} alt='im' id='img'/> :
                (dayDesc[index][index] === 'clouds') ? <img src={sunny_clouds} alt='im' id='img'/> :
                (dayDesc[index][index] === 'thunderstorm') ? <img src={thunder} alt='im' id='img'/> :
                (dayDesc[index][index] === 'clear') ? <img src={sunny} alt='im' id='img'/> :
                (dayDesc[index][index] === 'mist') ? <img src={cloud} alt='im' id='img'/> :
                (dayDesc[index][index] === 'scattered clouds') ? <img src={cloud} alt='im' id='img'/> :
                (dayDesc[index][index] === 'broken clouds') ? <img src={cloud} alt='im' id='img'/> :
                (dayDesc[index][index] === 'overcast clouds') ? <img src={cloud} alt='im' id='img'/> :
                (dayDesc[index][index] === 'shower rain') ? <img src={rain} alt='im' id='img'/> :
                (dayDesc[index][index] === 'moderate rain') ? <img src={rain} alt='im' id='img'/> :
                (dayDesc[index][index] === 'light intensity shower rain') ? <img src={rain} alt='im' id='img'/> :
                (dayDesc[index][index] === 'heavy intensity shower rain') ? <img src={rain} alt='im' id='img'/> :
                (dayDesc[index][index] === 'heavy intensity rain') ? <img src={rain} alt='im' id='img'/> :
                (dayDesc[index][index] === 'few clouds') ? <img src={cloud} alt='im' id='img'/> :
                (dayDesc[index][index] === 'clear sky') ? <img src={sunny} alt='im' id='img'/> :
            null}</p>
                <p>Min {minTemps[index]}</p>
                <p>Max {maxTemps[index]}</p>
                <p>Average tempreature{day}</p>
              </div>
            )
            })}
       
    </div>
  );
  }

export default WeekWeather;