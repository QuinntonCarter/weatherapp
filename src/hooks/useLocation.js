import { useState, useEffect } from "react";
import useSWR from "swr";

const locationFetcher = (...args) => fetch(...args).then((res) => res.json());
export const useLocation = (ipLocation) => {
  const [shouldFetchLocation, setShouldFetchLocation] = useState(
    Boolean(ipLocation)
  );

  const { data, error, isLoading } = useSWR(
    shouldFetchLocation
      ? `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_ACCESS}&q=${ipLocation}&days=5&aqi=yes&alerts=yes`
      : null,
    locationFetcher
  );

  useEffect(() => {
    if (data) {
      setShouldFetchLocation(false);
    }
  }, []);

  // return data
  return {
    data: data,
    isError: error,
    isLoading: isLoading,
  };
};
