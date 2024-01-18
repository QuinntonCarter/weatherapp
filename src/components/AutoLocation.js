import { useContext } from "react";
import { ForecastContext } from "../context/forecastContext";

export default function AutoLocation() {
  const { autoLocation, forecastDays, ipData } = useContext(ForecastContext);
  console.log("autoLocation status (autolocationcomp)", autoLocation);
  return autoLocation.data ? (
    <div className="">
      <h1 className=""> {forecastDays[0]} </h1>
      <h2 className="">
        {" "}
        {`${ipData.data.city}, ${ipData.data.region}, ${ipData.data.country}`}{" "}
      </h2>
      <h2 className="">{Math.floor(autoLocation.data.current.temp_f)}˚F</h2>
      <img
        className=""
        src={autoLocation.data.current.condition.icon}
        alt="condition visual"
      />
      <h3 className="">{autoLocation.data.current.condition.text}</h3>
      <h4> Humidity: {autoLocation.data.current.humidity}% </h4>
    </div>
  ) : (
    <div className="">
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
      Loading
    </div>
  );
}
