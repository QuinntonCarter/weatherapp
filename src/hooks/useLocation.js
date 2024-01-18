import { useEffect } from "react";
import useSWR from "swr";

const locationFetcher = (...args) => fetch(...args).then((res) => res.json()); // make global **

export const useLocation = (
  ipData,
  shouldFetchLocation,
  setShouldFetchLocation
) => {
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

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  return {
    locationData: data,
    isError: error,
    isLoading: isLoading,
  };
};
