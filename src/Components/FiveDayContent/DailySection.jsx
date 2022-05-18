import React from "react";
import Utils from "../../Utilities/Utils";

const DailySection = ({ data }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const AddDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  let counter = -1;
  data = data.slice(0, 5);
  let currentDate = new Date();
  let daysList = [];
  let fullDates = [];
  for (let i = 1; i <= 5; i++) {
    let nextDate = AddDays(currentDate, i);
    daysList.push(days[nextDate.getDay()]);
    fullDates.push(nextDate.getDate() + " " + months[nextDate.getMonth()]);
  }
  return (
    <div className="container">
      <div id="fiveDayBlockPicker" className="main-block day-picker">
        <div className="grid-five-days">
          {data.map((item) => {
            counter++;
            return (
              <div className="grid-item">
                <h2>{daysList[counter]}</h2>
                <p className="five-days-date">{fullDates[counter]}</p>
                <img
                  src={require("../../Images/WeatherIcons/" +
                    item.weather[0].icon +
                    ".png")}
                  alt="icon"
                />
                <h1>{Utils.GetCelciumFromKelvin(item.temp.day)}°C</h1>
                <p>{item.weather[0].main}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DailySection;
