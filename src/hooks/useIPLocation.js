import useSWR from "swr";
import { useEffect } from "react";

const autoLocationFetcher = (...args) =>
  fetch(...args).then((res) => res.json());

export const useIPLocation = (setLoading, setShouldFetchLocation) => {
  const { data, error, isLoading } = useSWR(
    "https://ipapi.co/json/",
    autoLocationFetcher
  );

  // useEffect(() => {
  //   setLoading(isLoading);
  // }, [isLoading]);

  // render data
  return {
    ipData: data,
    error: error,
    isLoading: isLoading,
  };
};
