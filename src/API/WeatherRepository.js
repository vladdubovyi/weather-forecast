import axios from "axios";

export default class WeatherRepository {
  static async GetFullWeatherByCity(cityName) {
    let response = await this.GetCurrentWeatherByCity(cityName);
    if (response == null) return null;
    response = await this.GetCurrentWeatherByCoords(
      response.data.coord.lat,
      response.data.coord.lon
    );
    return {
      CH: response,
      NB: await this.GetNearbyWeatherByCoords(
        response.data.lat,
        response.data.lon
      ),
    };
  }
  static async GetCurrentWeatherByCity(cityName) {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          cityName +
          "&appid=2e094072b85da86618be8988a2f87f82"
      );
      return response;
    } catch (ex) {
      return null;
    }
  }
  static async GetCurrentWeatherByCoords(lat, lon) {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          lat +
          "&lon=" +
          lon +
          "&exclude=minutely,alerts&appid=2e094072b85da86618be8988a2f87f82"
      );
      return response;
    } catch (ex) {
      return null;
    }
  }
  static async GetNearbyWeatherByCoords(lat, lon) {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/find?lat=" +
          lat +
          "&lon=" +
          lon +
          "&cnt=4" +
          "&exclude=minutely,alerts&appid=2e094072b85da86618be8988a2f87f82"
      );
      return response;
    } catch (ex) {
      return null;
    }
  }
}
