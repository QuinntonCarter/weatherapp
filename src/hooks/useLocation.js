import { useEffect, useState } from "react";
import useSWR from "swr";
import { cache } from "swr/_internal";

const locationFetcher = (...args) => fetch(...args).then((res) => res.json());

export const useLocation = (ipData) => {
  const [shouldFetchLocation, setShouldFetchLocation] = useState(ipData);
  const { data, error, isLoading } = useSWR(
    shouldFetchLocation
      ? `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_ACCESS}&q=${ipData.city}`
      : null,
    locationFetcher
  );

  useEffect(() => {
    if (data) {
      setShouldFetchLocation(false);
    }
  }, []);

  // render data
  return {
    locationData: data,
    isError: error,
    isLoading: isLoading,
  };
};