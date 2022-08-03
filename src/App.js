import Weather from './findWeather';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';

function AboutPage (){
  return (
      <div>
          <h1>About</h1>
          <p>This is a simple weather app</p>
          <p>Designed to help Magdalena pass the course</p>
          <Link to='/'>Home</Link>
      </div>
  )
}
function App() {
  return (
    <div className="App">
    
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Weather />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
