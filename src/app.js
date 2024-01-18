import React, { useState, useEffect } from "react";
import ForecastsView from "./components/ForecastsView";
import { useIPLocation } from "./hooks/useIPLocation";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { ipData, error, isLoading } = useIPLocation(setLoading);

  console.log("app => ip data", ipData);
  useEffect(() => {
    console.log("laoding useeffect app", loading);
  }, [loading]);

  // not displaying these ternaries..?
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <ForecastsView ipData={ipData} setLoading={setLoading} />
    </div>
  );
}
