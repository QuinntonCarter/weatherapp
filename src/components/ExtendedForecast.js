import Forecast from "./Forecast";

export default function ExtendedForecast({ locationData }) {
  console.log(
    "extended forecast",
    locationData.map((day) => console.log(day))
  );
  // maybe remove ternary loading
  if (!locationData.length) {
    <p>loading extended forecast...</p>;
  }
  return (
    <div>
      {locationData.map((day) => (
        <Forecast
          type={"Extended"}
          temp={day.day.avgtemp_f}
          condition={day.day.condition.text}
          mintemp={day.day.mintemp_f}
          maxtemp={day.day.maxtemp_f}
        />
      ))}
    </div>
  );
}
