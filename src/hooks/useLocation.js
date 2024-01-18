import { useEffect, useState } from "react";
import useSWR from "swr";

const locationFetcher = (...args) => fetch(...args).then((res) => res.json());

export const useLocation = (
  ipData,
  setLoading
  //   shouldFetchLocation,
  //   setShouldFetchLocation
) => {
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
    // setLoading(isLoading);
  }, []);

  // render data
  return {
    locationData: data,
    isError: error,
    isLoading: isLoading,
  };
};
