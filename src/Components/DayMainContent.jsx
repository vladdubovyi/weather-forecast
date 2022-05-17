import React from "react";
import HourlySection from "./DayContent/HourlySection";
import MainSection from "./DayContent/MainSection";
import NearbySection from "./DayContent/NearbySection";

const DayMainContent = ({ data }) => {
  return (
    <>
      <MainSection data={data.CH.data.current} />
      <HourlySection data={data.CH.data.hourly} />
      <NearbySection data={data.NB.data.list} />
    </>
  );
};

export default DayMainContent;
