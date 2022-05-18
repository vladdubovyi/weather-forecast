import React from "react";
import Utils from "../../Utilities/Utils";
import { useNavigate } from "react-router-dom";

const NearbySection = ({ data }) => {
  const navigate = useNavigate();
  const redirectToPlace = (name) => {
    navigate("/Day/" + name);
  };
  return (
    <div className="main-block nearby" id="mainBlockNearby">
      <div className="wrapper">
        <div className="block-header-wrapper">
          <p className="blocks-header-text">NEARBY PLACES</p>
        </div>
      </div>

      <div className="wrapper">
        <div className="grid-nearby">
          {data.map((item) => {
            return (
              <div
                className="grid-item"
                onClick={() => redirectToPlace(item.name)}
                key={item.id}
              >
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
