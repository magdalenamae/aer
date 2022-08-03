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

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function WeekWeather(props) {
  let currentDay = props.week[0]
  let currentIndex = 0
  let daysOfWeek = [[], [], [], [], []]
  let daysOfTheWeekWeather = []
  let dayData = [[], [], [], [], []]
  let dayMin = [[], [], [], [], []]
  let minTemps = []
  let dayMax = [[], [], [], [], []]
  let maxTemps = []
  let dayDesc = [[], [], [], [], []]
  let weekDays = []

// for loop to create mutipul arrays of the week data and weather data
  for (let day of props.week){
   if (currentDay.dt_txt.slice(0,10) === day.dt_txt.slice(0,10)){
    daysOfWeek[currentIndex].push(day.main.temp)
    dayData[currentIndex].push(day.dt_txt.slice(0,10))
    dayMin[currentIndex].push(day.main.temp_min)
    dayMax[currentIndex].push(day.main.temp_max)
    dayDesc[currentIndex].push(day.weather[0].description)
   } else {
    currentIndex ++ 
    if ( currentIndex >= 5) {
      break // stop the loop
    }
    currentDay = day
    daysOfWeek[currentIndex].push(day.main.temp)
    dayData[currentIndex].push(day.dt_txt.slice(0,10)) 
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
  }
  // for loop to convert each max temp day of the week to celcius and pushing it to an array
  for (let max of dayMax){
    let maximum = convertToCelcius(max[0])
    maxTemps.push(maximum)
  }
  for (let date of dayData){
  
    let updated = new Date(date[0]).toLocaleString('en-us', {weekday:'long'})
    weekDays.push(updated)
  }

  return (
    <Container fluid>
        {daysOfTheWeekWeather.map((day, index) => {
            return (
              <Row id='week-div' key={index}>
                <Col>{weekDays[index]}</Col>
                <Col>
                {(dayDesc[index][0] === 'sunny') ? <img src={sunny} alt='im' id='img'/> : 
                (dayDesc[index][0] === 'light rain') ? <img src={lightRain} alt='im' id='img'/> : 
                (dayDesc[index][0] === 'rain') ? <img src={cloudy_rain} alt='im' id='img'/> :
                (dayDesc[index][0] === 'snow') ? <img src={snow} alt='im' id='img'/> :
                (dayDesc[index][0] === 'clouds') ? <img src={sunny_clouds} alt='im' id='img'/> :
                (dayDesc[index][0] === 'thunderstorm') ? <img src={thunder} alt='im' id='img'/> :
                (dayDesc[index][0] === 'clear') ? <img src={sunny} alt='im' id='img'/> :
                (dayDesc[index][0] === 'clear sky') ? <img src={sunny} alt='im' id='img'/> :
                (dayDesc[index][0] === 'mist') ? <img src={cloud} alt='im' id='img'/> :
                (dayDesc[index][0] === 'scattered clouds') ? <img src={cloud} alt='im' id='img'/> :
                (dayDesc[index][0] === 'broken clouds') ? <img src={cloud} alt='im' id='img'/> :
                (dayDesc[index][0] === 'overcast clouds') ? <img src={cloud} alt='im' id='img'/> :
                (dayDesc[index][0] === 'shower rain') ? <img src={rain} alt='im' id='img'/> :
                (dayDesc[index][0] === 'moderate rain') ? <img src={rain} alt='im' id='img'/> :
                (dayDesc[index][0] === 'light intensity shower rain') ? <img src={rain} alt='im' id='img'/> :
                (dayDesc[index][0] === 'heavy intensity shower rain') ? <img src={rain} alt='im' id='img'/> :
                (dayDesc[index][0] === 'heavy intensity rain') ? <img src={rain} alt='im' id='img'/> :
                (dayDesc[index][0] === 'few clouds') ? <img src={cloud} alt='im' id='img'/> :
                (dayDesc[index][0] === 'clear sky') ? <img src={sunny} alt='im' id='img'/> :
            null}</Col>
                <Col>Min {minTemps[index]}</Col>
                <Col>Max {maxTemps[index]}</Col>
              </Row>
            )
            })}
       
    </Container>
  );
  }

export default WeekWeather;