import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import DayMainContent from "../Components/DayMainContent";
import WeatherRepository from "../API/WeatherRepository";
import Loader from "../Components/UI/Loader/Loader";

const DayPage = () => {
  const cityName = useParams().name;
  const [weatherData, setWeatherData] = useState();
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);

  async function updateData() {
    setIsWeatherLoading(true);
    setWeatherData(await WeatherRepository.GetFullWeatherByCity(cityName));
    setIsWeatherLoading(false);
  }
  useEffect(() => {
    updateData();
  }, [cityName]);

  return (
    <div className="container">
      {isWeatherLoading ? (
        <Loader />
      ) : weatherData == null ? (
        <NotFound />
      ) : (
        <DayMainContent data={weatherData} />
      )}
    </div>
  );
};

export default DayPage;
