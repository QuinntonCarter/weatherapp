import React, { useState, useEffect } from "react";
import { useIPLocation } from "./hooks/useIPLocation";
import ForecastsView from "./components/ForecastsView";

import { Footer } from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fetchLocation, setFetchLocation] = useState(true);
  const { ipData, error, isLoading } = useIPLocation(
    setFetchLocation,
    fetchLocation
  );

  useEffect(() => {
    console.log("laoding useeffect app", loading || error);
  }, [loading]);

  if (error) return <div>failed to load ip data</div>;
  if (isLoading) return <div>loading ip data...</div>;

  return (
    <div className="appContainer">
      <Header />
      <ForecastsView ipData={ipData} />
      <Footer />
    </div>
  );
}
