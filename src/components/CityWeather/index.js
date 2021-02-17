import React from "react";

const CityWeather = ({cityWeather}) => {
  
console.log(cityWeather)
  const kelvinToCel = (temp) => {
    return temp - 273.15;
  };

  return (
    <>
      <div style={{ fontSize: "15px",padding:"10px" }}>
       <p>Temperature : {cityWeather.main!==undefined ? kelvinToCel(cityWeather.main.temp)+"°C":""}</p>
       <p>Humidity : {cityWeather.main!=undefined ? cityWeather.main.humidity+"%" : ""}</p>
       <p>Wind : {cityWeather.main!=undefined ? cityWeather.wind.speed +"km/h" : ""}</p>
      </div>
    </>
  );

};

export default CityWeather;
