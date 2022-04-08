import React from 'react';
import axios from 'axios';
import SearchSection from '../Components/UI/SearchSection/SearchSection';
import searchIcon from '../Images/searchIcon.png';

const DayPage = () => {
    async function GetCurrentTemperatureInCity(cityName) {
        let response = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=2e094072b85da86618be8988a2f87f82");
        console.log(response);
      }
      return (
        <div>
          <SearchSection icon={searchIcon} onClick={GetCurrentTemperatureInCity}/>
        </div>
      );
};

export default DayPage;