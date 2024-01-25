import React, { useState } from "react";

// import { ForecastContext } from "./context/forecastContext";
// import AutoLocation from "./components/AutoLocation.js";

export default function Main({ timeStyle, tempStyle }) {
  // const { autoLocation, forecastDays, getForecast, ipData } =
  //   useContext(ForecastContext);

  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // getForecast(location);
  }

  return (
    <form onSubmit={handleSubmit} className={``} required>
      <p className="">
        {/* <i className={`${timeStyle().icon} ${tempStyle()}`} /> ((refactor)) */}
      </p>
      <input
        required
        className=""
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="enter city or zip code"
      />
      <button className={``} onClick={handleSubmit}>
        Check Forecast
      </button>
      {/* {autoLocation.data ? (
        <div className="m-4 flex flex-col mx-auto place-items-center">
          <h2 className="font-medium text-lg"> {forecastDays[0]} </h2>
          <h1 className="font-medium text-md">
            {" "}
            {`${ipData.data.city}, ${ipData.data.region}, ${ipData.data.country}`}{" "}
          </h1>
          <h2 className="font-bold" style={{ fontSize: "250%" }}>
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
      )} */}
    </form>
  );
}
