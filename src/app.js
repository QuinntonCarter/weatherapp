import React, { useContext, useState } from "react";
import SearchForecast from "./components/searchForecast";
import { ForecastContext } from "./context/forecastContext";
import { useIPLocation } from "./hooks/useIPLocation";
// import { Routes, Route } from "react-router-dom";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { ipData, error, isLoading, why } = useIPLocation(setLoading);
  const { now, autoLocation } = useContext(ForecastContext);
  console.log("app comp ip data", ipData);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // maybe put loader ternary
  return <SearchForecast ipData={ipData} />;
}
