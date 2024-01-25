import { useRef } from "react";
// import { ForecastContext } from "../context/forecastContext";

// card view of forecast, reusable
export default function Forecast({ type, locationData }) {
  // let locationRef = useRef(locationData);
  console.log("ref", locationData, "condition", locationData);
  if (!locationData) {
    <p>loading</p>;
  }
  if (type === "daily")
    return (
      <>
        {/* <p> daily forecast placeholder </p>
        <p> {locationData.current.temp_f} </p>
        <p>{locationData.current.condition.text}</p>
        <p>{locationData.location.name}</p> */}
      </>
    );
  if (type === "extended") return <p> extended forecast placeholder </p>;
}
