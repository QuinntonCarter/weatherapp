import { cache } from "swr/_internal";
// import { useContext } from "react";
// import { ForecastContext } from "../context/forecastContext";

// card view of forecast, reusable
export default function Forecast({ type }) {
  console.log(
    "forecast component",
    // cache.map((obj) => obj.value.data),
    "condition"
    // condition
  );
  if (type === "daily")
    return <p>daily forecast placeholder {console.log(cache)}</p>;
  if (type === "extended") return <p> extended forecast placeholder </p>;
}
