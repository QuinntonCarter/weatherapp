import { useEffect } from "react";
import useSWR from "swr";

const autoLocationFetcher = (...args) =>
  fetch(...args).then((res) => res.json());

export const useIPLocation = (setFetchLocation, fetchLocation) => {
  const { data, error, isLoading } = useSWR(
    fetchLocation ? "https://ipapi.co/json/" : null,
    autoLocationFetcher
  );

  useEffect(() => {
    if (data) {
      setFetchLocation(false);
    }
  }, []);

  // return data
  return {
    ipData: data,
    error: error,
    isLoading: isLoading,
  };
};
