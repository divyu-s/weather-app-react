import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CityInput from "./components/CityInput";
import CityWeather from "./components/CityWeather";

function App() {
  const [city, setCity] = useState("");
  const [cityWeather,setCityWeather] = useState({});
  //const [flag,setFlag] = useState(false);

  // const renderOrNot = (flag)=>{
  //   if(flag){
  //     return <CityWeather cityWeather={cityWeather}/>
  //   }
  //   else return <div></div>
  // }

  const fetchCityWeather = () => {
    //console.log("fetch");
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`)
      .then((response) => response.json())
      .then((result) => {
        //setFlag(true);
        setCityWeather(result);
        
      })
      .catch((error)=>{
        console.log("error is",error);
      })
  };
  //console.log(cityWeather)
  return (
    <div className="container bg-dark text-center text-uppercase font-weight-bold rounded" style={{fontSize:"25px", color:"white"}}>
      Your City Weather
      <CityInput
        city={city}
        setCity={setCity}
        fetchCityWeather={fetchCityWeather}
      />
      <div>
      <CityWeather cityWeather={cityWeather}/>
      </div>
    </div>
  );
}

export default App;
