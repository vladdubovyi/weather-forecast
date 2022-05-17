import React from "react";
import Utils from "../../Utilities/Utils";

const MainSection = ({ data }) => {
  const temperature = Utils.GetCelciumFromKelvin(data.temp);
  const temperatureFeelsLike = Utils.GetCelciumFromKelvin(data.feels_like);
  const sunrise = Utils.GetNormalDateString(new Date(data.sunrise * 1000));
  const sunset = Utils.GetNormalDateString(new Date(data.sunset * 1000));
  const weatherName = data.weather[0].main;
  const weatherIcon = require("../../Images/WeatherIcons/" +
    data.weather[0].icon +
    ".png");

  return (
    <div className="main-block current">
      <div className="wrapper">
        <div className="block-header-wrapper">
          <p className="blocks-header-text">CURRENT WEATHER</p>
          <p className="blocks-header-text">
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="block-content-wrapper">
        <div className="block-content">
          <div className="visualizer block-content-item">
            <img src={weatherIcon} alt="Weather" />
            <p>{weatherName}</p>
          </div>

          <div className="tempnum block-content-item">
            <p className="actualTemp">{temperature}°C</p>
            <p className="feelsLikeTemp">Real Feel: {temperatureFeelsLike}°C</p>
          </div>

          <div className="additional block-content-item">
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
