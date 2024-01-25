import { useState } from "react";
import useSWR from "swr";

const locationFetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .catch((err) => console.log("location error", err));
export const useLocation = (ipLocation) => {
  const [shouldFetchLocation, setShouldFetchLocation] = useState(
    Boolean(ipLocation)
  );

  const { data, error, isLoading } = useSWR(
    // const locationResponse = useSWR(
    shouldFetchLocation
      ? locationFetcher(
          `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_ACCESS}&q=${ipLocation}`
        )
      : null
  );
  // fetch(
  //   `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_ACCESS}&q=${ipLocation}`
  // ).then((res) => console.log(res.json()));
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_ACCESS}&q=${ipLocation}`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
  console.log(
    "should fetch?",
    shouldFetchLocation,
    "location hook data",
    data,
    "url?",
    `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_ACCESS}&q=${ipLocation}`
  );

  // useEffect(() => {
  //   console.log("useeffect uselocation", "hi");
  //   if (data) {
  //     setShouldFetchLocation(false);
  //   }
  // }, [data]);

  // render data
  return {
    // locationData: data,
    // isError: error,
    // isLoading: isLoading,
  };
};
