import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";
import DayMainContent from "../Components/DayMainContent";
import WeatherRepository from "../API/WeatherRepository";
import Loader from "../Components/UI/Loader/Loader";
import { Helmet } from "react-helmet-async";

const DayPage = () => {
  const cityName = useParams().name;
  const [weatherData, setWeatherData] = useState();
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);

  useEffect(() => {
    async function updateData() {
      setIsWeatherLoading(true);
      setWeatherData(await WeatherRepository.GetFullWeatherByCity(cityName));
      setIsWeatherLoading(false);
    }
    updateData();
  }, [cityName]);

  return (
    <div className="container">
      <Helmet>
        <title>Daily forecast</title>
        <meta
          name="description"
          content="Daily forecast for WeatherForecast site by Vladyslav Dubovyi"
        />
        <link rel="canonical" href="/Day" />
      </Helmet>
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
