import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Col, Row} from 'react-bootstrap'

import './about.css';
import './App.css'

import MainPage from './mainPage';
import Weather from './findWeather';

import thunderstorm from './images/thunderstorm.png'

function AboutPage (){
  return (
      <Row>
          <img src={thunderstorm} alt="thunderstorm" className="thunderstorm" id="img"/>
          <h1 id='about-header'>AER</h1>
          <Col id='about-text'>The vison behind aer,
           To build a react application in a fortnight, making it successfully accessible and user friendly.
           Aer translating to 'air' in Greek and 'weather' in Latin was the theme of this project.
            This is a weather application that allows the user to search for a city and obtain that locations weather. 
            Aer allows the user to get the weather for the next business week, in either celsius or kelvin.
           </Col>
           <Row>
          <Link id='homepage-link' to='/'>Home</Link>
          </Row>
      </Row>
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
