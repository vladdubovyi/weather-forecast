import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherRepository from "../API/WeatherRepository";
import NotFound from "./NotFound";
import FiveDayMainContent from "../Components/FiveDayMainContent";

const FiveDayPage = ({ data }) => {
  const cityName = useParams().name;
  const [weatherData, setWeatherData] = useState();
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);

  async function updateData() {
    setIsWeatherLoading(true);
    setWeatherData(await WeatherRepository.GetDailyWeatherByName(cityName));
    setIsWeatherLoading(false);
  }
  useEffect(() => {
    updateData();
  }, [cityName]);
  return (
    <div className="container">
      {isWeatherLoading ? (
        <h1>Loading...</h1>
      ) : weatherData == null ? (
        <NotFound />
      ) : (
        <FiveDayMainContent data={weatherData} />
      )}
    </div>
  );
};

export default FiveDayPage;
