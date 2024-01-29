import React, { useState } from "react";
import { useLocation } from "../hooks/useLocation";
import Forecast from "./Forecast";
import SearchLocationForm from "./SearchLocationForm";

export default function ForecastsView({ ipData }) {
  const [location, setLocation] = useState(ipData.postal);
  const { data, isError, isLoading } = useLocation(location);

  if (isError)
    return <div className={`container`}>failed to retrieve location data</div>;
  if (isLoading)
    return <div className={`container`}>loading location data...</div>;
  return (
    <div className={`container`}>
      <SearchLocationForm
        location={location}
        setLocation={setLocation}
      />
      <Forecast
        type={"Daily"}
        temp={data.current.temp_f}
        condition={data.current.condition.text}
        name={data.location.name}
        img={data.current.condition.icon}
      />
      <div className="extendedViewContainer">
        {data.forecast.forecastday.map((day, i) => (
          <Forecast
            type={"Extended"}
            temp={day.day.avgtemp_f}
            condition={day.day.condition.text}
            mintemp={day.day.mintemp_f}
            maxtemp={day.day.maxtemp_f}
            key={i}
            index={i}
            id={i}
            date={day.date_epoch}
            img={day.day.condition.icon}
          />
        ))}
      </div>
    </div>
  );
}
