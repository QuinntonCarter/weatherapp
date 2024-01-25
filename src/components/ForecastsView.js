import React, { useState } from "react";
import { useLocation } from "../hooks/useLocation";
import Forecast from "./Forecast";
import SearchLocationForm from "./SearchLocationForm";
import ExtendedForecast from "./ExtendedForecast";

export default function ForecastsView({ ipData }) {
  const { data, isError, isLoading } = useLocation(ipData.city);
  console.log("forecasts view", data, isError, isLoading);

  if (isError)
    return <div className={`container`}>failed to retrieve location data</div>;
  if (isLoading)
    return <div className={`container`}>loading location data...</div>;
  return (
    <div className={`container`}>
      <SearchLocationForm />
      <Forecast
        type={"Daily"}
        temp={data.current.temp_f}
        condition={data.current.condition.text}
        name={data.location.name}
      />
      <ExtendedForecast locationData={data.forecast.forecastday} />
    </div>
  );
}
