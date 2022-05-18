import React from "react";
import DailySection from "./FiveDayContent/DailySection";

const FiveDayMainContent = ({ data }) => {
  return (
    <>
      <DailySection data={data.data.daily} />
    </>
  );
};

export default FiveDayMainContent;
