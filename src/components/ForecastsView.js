import React, { useState } from "react";
import { useLocation } from "../hooks/useLocation";
import { cache } from "swr/_internal";
import Forecast from "./Forecast";

export default function ForecastsView({ ipData }) {
  const { locationData, isError, isLoading } = useLocation(ipData);
  const [type, setType] = useState("daily");
  console.log("searchForecast => location data", Boolean(locationData));

  if (isError) return <div>failed to retrieve location data</div>;
  if (isLoading) return <div>loading location data...</div>;

  return (
    <div className={``}>
      {/* testing */}
      <Forecast type={type} />
      {/* testing */}
      {/* {searchedLocation.location ? (
        <div className="">
          <h1 className="">
            {`${searchedLocation.location.name}, ${searchedLocation.location.region}, ${searchedLocation.location.country}`}
          </h1>
          <span className="">
            <h2 className=""> {forecastDays[0]} </h2>
            <h1 className="">{Math.floor(searchedLocation.current.temp_f)}˚</h1>
            <img
              className=""
              src={searchedLocation.current.condition.icon}
              alt="condition description"
            />
            <h2 className=""> {searchedLocation.current.condition.text} </h2>
            <h3 className="">Humidity: {searchedLocation.current.humidity}%</h3>
          </span>
          <span className="">
            <h3 className=""> {forecastDays[1]} </h3>
            <h2 className="">
              {Math.floor(
                searchedLocation.forecast.forecastday[1].day.avgtemp_f
              )}
              ˚
            </h2>
            <img
              src={searchedLocation.forecast.forecastday[1].day.condition.icon}
              alt="condition visual"
            />
            <h4 className="">
              {searchedLocation.forecast.forecastday[1].day.condition.text}
            </h4>
          </span>
          <span className="">
            <h3 className=""> {forecastDays[2]} </h3>
            <h2 className="">
              {Math.floor(
                searchedLocation.forecast.forecastday[2].day.avgtemp_f
              )}
              ˚
            </h2>
            <img
              src={searchedLocation.forecast.forecastday[2].day.condition.icon}
              alt="condition visual"
            />
            <h4 className="">
              {searchedLocation.forecast.forecastday[2].day.condition.text}
            </h4>
          </span>
          <Link to="/">
            <button className={``} onClick={() => setSearchedLocation("")}>
              new location
            </button>
          </Link>
        </div>
      ) : (
        <>
          <h2> Loading ... </h2>
          <Link to="/">
            <button
              className={`font-medium m-2 shadow hover:bg-gray-700 text-white bg-gray-500 p-3 rounded-full`}
              onClick={() => setSearchedLocation("")}
            >
              new location
            </button>
          </Link>
        </>
      )} */}
    </div>
  );
}
