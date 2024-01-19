import React, { useState, useEffect } from "react";
import { useIPLocation } from "./hooks/useIPLocation";
import ForecastsView from "./components/ForecastsView";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { ipData, error, isLoading } = useIPLocation(setLoading);

  console.log("app => ip data", Boolean(ipData));

  useEffect(() => {
    console.log("laoding useeffect app", loading);
  }, [loading]);

  // not displaying these ternaries..?
  if (error) return <div>failed to load ip data</div>;
  if (isLoading) return <div>loading ip data...</div>;

  return (
    <div>
      <ForecastsView ipData={ipData} />
    </div>
  );
}
