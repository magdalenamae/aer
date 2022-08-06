# AER


https://user-images.githubusercontent.com/99164498/183227890-53122f97-c7af-4584-a781-f4c4b3a4b267.mov


## v1.0.0

### Technologies Used
- React
- JavaScript
- CSS, HTML
- Figma 
- Jest
- OpenWeather Map Api

### Goals not Reached

- setting a landing page with intial weather data 
- adding audio components to the app for each different weather state



### Function for making api call and setting state 

```
 
    function callAxios(props){
        axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${props}&limit=1&appid=${apiKey}`)
        .then(response => {
          
            setCity(response.data[0].name)
            let latitude = response.data[0].lat
            let longitude = response.data[0].lon
            
           
                axios.get(`https://api.openweathermap.org/data/2.5/forecast?&lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
                    .then(response => {
                        setDay(response.data.list.slice(0,5))
                        setWeek(response.data.list.slice(6))
                        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
                            .then(response => {
                                // console.log(response.data , 'day data')
                                setDaySelected(response.data)
                                setCity(localStorage.getItem('city', city))
                                setCitySelected(response.data.name)
                                setTempMainSelected(response.data.main.temp)
                                setTempMinSelected(response.data.main.temp_min)
                                setTempMaxSelected(response.data.main.temp_max)
                                setDescription(response.data.weather[0].description)
                            })
                    })
                    

        }) 
    }
```

### Function to set Geolocation Coordiants 
```
  const GeolocationCoordinates = (event) => {
        if(event){
            event.preventDefault();
        }
        
        callAxios(city)  
    }
```
### Function using UseEffect to acess local storage and make axios call 
```
 useEffect (() => {
        setCity(localStorage.getItem('city'))
        callAxios(localStorage.getItem('city'))
        console.log(city)
    },[])
```

<img
  src="./images/desktop.png"
  alt="Alt text"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px">
  <img
  src="./images/mobile.png"
  alt="Alt text"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 300px; height: 50px">

<img src="/src/images/styleguide.png"
alt="style guide"
style="display: inline-block; margin: 0 auto; max-width: 300px; height: 50px">

### How to run it yourself
- yarn install 
- yarn start
