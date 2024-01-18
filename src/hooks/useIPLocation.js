import useSWR from "swr";
import { useEffect } from "react";

const autoLocationFetcher = (...args) =>
  fetch(...args).then((res) => res.json());

export const useIPLocation = (setLoading, setShouldFetchLocation) => {
  const { data, error, isLoading } = useSWR(
    "https://ipapi.co/json/",
    autoLocationFetcher
  );

  useEffect(() => {
    if (data && !isLoading) {
      setShouldFetchLocation(true);
    }
    setLoading(isLoading);
  }, [isLoading]);

  if (error) return <div>failed to load ipdata</div>;
  if (isLoading) return <div>loading ip data...</div>;

  // render data
  return {
    ipData: data,
    error: error,
    isLoading: isLoading,
  };
};
