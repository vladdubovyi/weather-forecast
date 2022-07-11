import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherRepository from "../API/WeatherRepository";
import NotFound from "./NotFound";
import FiveDayMainContent from "../Components/FiveDayMainContent";
import Loader from "../Components/UI/Loader/Loader";
import { Helmet } from "react-helmet-async";

const FiveDayPage = ({ data }) => {
  const cityName = useParams().name;
  const [weatherData, setWeatherData] = useState();
  const [isWeatherLoading, setIsWeatherLoading] = useState(false);

  useEffect(() => {
    async function updateData() {
      setIsWeatherLoading(true);
      setWeatherData(await WeatherRepository.GetDailyWeatherByName(cityName));
      setIsWeatherLoading(false);
    }

    updateData();
  }, [cityName]);
  return (
    <div className="container">
      <Helmet>
        <title>5 days forecast</title>
        <meta
          name="description"
          content="5 days forecast for WeatherForecast site by Vladyslav Dubovyi"
        />
        <link rel="canonical" href="/5Day" />
      </Helmet>
      {isWeatherLoading ? (
        <Loader />
      ) : weatherData == null ? (
        <NotFound />
      ) : (
        <FiveDayMainContent data={weatherData} />
      )}
    </div>
  );
};

export default FiveDayPage;
