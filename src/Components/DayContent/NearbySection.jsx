import React from "react";
import Utils from "../../Utilities/Utils";

const NearbySection = ({ data }) => {
  console.log(data);
  return (
    <div class="main-block nearby" id="mainBlockNearby">
      <div class="wrapper">
        <div class="block-header-wrapper">
          <p class="blocks-header-text">NEARBY PLACES</p>
        </div>
      </div>

      <div class="wrapper">
        <div class="grid-nearby">
          {data.map((item) => {
            return (
              <div class="grid-item">
                <h2>{item.name}</h2>
                <img
                  src={require("../../Images/WeatherIcons/" +
                    item.weather[0].icon +
                    ".png")}
                  alt="icon"
                />
                <p>{Utils.GetCelciumFromKelvin(item.main.temp)}°C</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NearbySection;
