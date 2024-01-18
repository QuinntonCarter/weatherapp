import React, { useState } from "react";
import SearchForecast from "./components/searchForecast";
import { useIPLocation } from "./hooks/useIPLocation";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [shouldFetchLocation, setShouldFetchLocation] = useState(false);
  const { ipData, error, isLoading } = useIPLocation(
    setLoading,
    setShouldFetchLocation
  );

  console.log("app comp ip data", ipData);
  // not displaying these ternaries..?
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      <SearchForecast
        ipData={ipData}
        shouldFetchLocation={shouldFetchLocation}
        setShouldFetchLocation={setShouldFetchLocation}
      />
    </div>
  );
}
