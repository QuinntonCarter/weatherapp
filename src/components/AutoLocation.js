import { useContext } from "react";
import { ForecastContext } from "../context/forecastContext";

export default function AutoLocation() {
  const { autoLocation, forecastDays, ipData } = useContext(ForecastContext);

  return autoLocation.data ? (
    <div className="m-4 flex flex-col mx-auto place-items-center">
      <h1 className="font-medium text-xl"> {forecastDays[0]} </h1>
      <h2 className="font-medium text-md">
        {" "}
        {`${ipData.data.city}, ${ipData.data.region}, ${ipData.data.country}`}{" "}
      </h2>
      <h2 className="font-bold text-lg">
        {" "}
        {Math.floor(autoLocation.data.current.temp_f)}˚F
      </h2>
      <img
        className="font-medium"
        src={autoLocation.data.current.condition.icon}
        alt="condition visual"
      />
      <h3 className="font-medium text-md">
        {" "}
        {autoLocation.data.current.condition.text}
      </h3>
      <h4> Humidity: {autoLocation.data.current.humidity}% </h4>
    </div>
  ) : (
    <div className="bg-blue-600">
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24" />
      Loading
    </div>
  );
}
