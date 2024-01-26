import { useEffect, useState } from "react";
import Forecast from "./Forecast";

export default function ExtendedForecast({ locationData }) {
  const [locationArr, setLocationArr] = useState(null || locationData);

  // maybe remove ternary loading
  const mappedLocationData = locationData.map((day, i) => (
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
      locationArr={locationArr}
      setLocationArr={setLocationArr}
    />
  ));

  if (!locationData.length) {
    <p>loading extended forecast...</p>;
  }

  useEffect(() => {
    console.log("Extended rendered");
  }, []);

  return <div className="extendedForecastContainer">{mappedLocationData}</div>;
}
