import React from "react";
import Utils from "../../Utilities/Utils";

const HourlySection = ({ data }) => {
  data = data.slice(0, 6);
  const currentTimes = [];
  for (let i = 1; i <= 6; i++) {
    currentTimes.push(Utils.NormalizeHours(new Date().getHours() + i));
  }
  return (
    <div className="main-block hourly" id="mainBlockHourly">
      <div className="wrapper">
        <div className="block-header-wrapper">
          <p className="blocks-header-text">HOURLY</p>
        </div>
      </div>

      <div className="wrapper">
        <div className="grid-container">
          <div className="grid-item">
            <p>TODAY</p>
          </div>

          {currentTimes.map((time) => {
            return (
              <div className="grid-item">
                <p>{time}</p>
              </div>
            );
          })}

          <div className="grid-item"></div>

          {data.map((item) => {
            return (
              <div className="grid-item">
                <img
                  src={require("../../Images/WeatherIcons/" +
                    item.weather[0].icon +
                    ".png")}
                  alt="icon"
                />
              </div>
            );
          })}

          <div className="grid-item">
            <p>Condition</p>
          </div>

          {data.map((item) => {
            return (
              <div className="grid-item">
                <p>{item.weather[0].main}</p>
              </div>
            );
          })}

          <div className="grid-item">
            <p>Temp</p>
          </div>

          {data.map((item) => {
            return (
              <div className="grid-item">
                <p>{Utils.GetCelciumFromKelvin(item.temp)}°C</p>
              </div>
            );
          })}

          <div className="grid-item">
            <p>Real feel</p>
          </div>

          {data.map((item) => {
            return (
              <div className="grid-item">
                <p>{Utils.GetCelciumFromKelvin(item.feels_like)}°C</p>
              </div>
            );
          })}

          <div className="grid-item">
            <p>Wind</p>
          </div>

          {data.map((item) => {
            return (
              <div className="grid-item">
                <p>{item.wind_speed} km/h</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HourlySection;
