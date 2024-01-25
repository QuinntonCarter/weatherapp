import { useRef } from "react";
// import { ForecastContext } from "../context/forecastContext";

// card view of forecast, reusable
export default function Forecast({ type, locationData }) {
  // let locationRef = useRef(locationData);
  // console.log("ref", locationRef.current, "condition", locationData);
  if (type === "daily")
    return (
      <>
        <p> daily forecast placeholder </p>
        {/* <p> {locationRef.current.current.temp_f} </p>
        <p>{locationRef.current.current.condition.text}</p>
        <p>{locationRef.current.location.name}</p> */}
      </>
    );
  if (type === "extended") return <p> extended forecast placeholder </p>;
}
