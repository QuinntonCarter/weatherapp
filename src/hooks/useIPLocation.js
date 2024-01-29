import useSWR from "swr";

const autoLocationFetcher = (...args) =>
  fetch(...args).then((res) => res.json());

export const useIPLocation = (setLoading) => {
  const { data, error, isLoading } = useSWR(
    "https://ipapi.co/json/",
    autoLocationFetcher
  );

  // return data
  return {
    ipData: data,
    error: error,
    isLoading: isLoading,
  };
};
