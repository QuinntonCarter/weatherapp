import { useEffect, useState } from "react";
import Forecast from "./Forecast";

export default function ExtendedForecast({ locationData }) {
  const [testArr, setTestArr] = useState(null || locationData);
  // console.log(
  //   "extended forecast",
  //   locationData.map((day) => console.log(day))
  // );
  // maybe remove ternary loading
  if (!locationData.length) {
    <p>loading extended forecast...</p>;
  }

  useEffect(() => {
    console.log("test array", testArr);
  }, []);

  return (
    <div className="extendedForecastContainer">
      {locationData.map((day, i) => (
        <Forecast
          type={"Extended"}
          temp={day.day.avgtemp_f}
          condition={day.day.condition.text}
          mintemp={day.day.mintemp_f}
          maxtemp={day.day.maxtemp_f}
          key={i}
          index={i}
          testArr={locationData}
          date={day.date_epoch}
        />
      ))}
    </div>
  );
}
