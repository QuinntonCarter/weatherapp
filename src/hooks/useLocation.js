import useSWR from "swr";

const locationFetcher = (...args) => fetch(...args).then((res) => res.json()); // make global **

export default function useIPLocation(location) {
  const { data, error, isLoading } = useSWR(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_ACCESS}&q=${location.city}`,
    locationFetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  // render data
  console.log("location hook fetch info", data);
  return <div>hello {console.log("location hook fetch success")}!</div>;
}
