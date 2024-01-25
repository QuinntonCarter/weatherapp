import useSWR from "swr";
import { useEffect } from "react";

const autoLocationFetcher = (...args) =>
  fetch(...args).then((res) => res.json());

export const useIPLocation = (setLoading) => {
  const { data, error, isLoading } = useSWR(
    "https://ipapi.co/json/",
    autoLocationFetcher
  );

  // render data
  return {
    ipData: data,
    error: error,
    isLoading: isLoading,
  };
};
