import Weather from './findWeather';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './about.css';
import './App.css';
import MainPage from './mainPage';

function AboutPage (){
  return (
      <div>
          <h1 id='about-header'>AER</h1>
          <p id='about-text'>The vsion behind aer was quite simple really,
           build a react built application in two weeks and make it achivable.
           Aer meaning 'air' in Greek and weather in Latin was the theme of the project whilst incorperating a modern twist to the theme.
            The application is a weather application that allows the user to search for a city and get the weather for that specific city. 
            The application also allows the user to get the weather for the next 5 days and the weather for the next 7 days.
            The application also allows the user to convert the temperature from kelvin to celcius and vice versa.

           </p>
          <Link id='homepage-link' to='/'>Home</Link>
      </div>
  )
}

function App() {
  return (
    <div className="App">
    
        <BrowserRouter>
            <Routes>
                 <Route path="/" element={<MainPage />} />
                {/* <Route path="/" element={<Weather />} /> */}
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
