import { useState } from "react";

// card view of forecast, reusable
export default function Forecast({
  type,
  temp,
  condition,
  name = false,
  maxtemp = false,
  mintemp = false,
  index,
}) {
  console.log("ref", "condition", temp);

  const [display, setDisplay] = useState(true);

  function handleCloseWindow() {
    setDisplay(false);
    console.log("this is window", index);
  }

  const isAverage = mintemp || maxtemp ? "Average " : "";
  if (!temp) {
    <p>loading forecast...</p>;
  }

  return (
    <div
      className="window daily"
      style={{ display: !display && "none" }}
    >
      <div className="title-bar">
        <div className="title-bar-text">{type} Forecast</div>
        {type === "Extended" ? (
          <div className="title-bar-controls">
            {/* <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button> */}
            <button
              aria-label="Close"
              onClick={handleCloseWindow}
            ></button>
          </div>
        ) : null}
      </div>
      <span className="dailytextContainer">
        <p className="forecastText">{`${isAverage}${Math.round(temp)}`}</p>
        <span className="minmaxtemp-container">
          {mintemp ? (
            <p className="forecastText">High {Math.round(mintemp)}</p>
          ) : null}
          {maxtemp ? (
            <p className="forecastText">Low {Math.round(maxtemp)}</p>
          ) : null}
        </span>
        <p className="forecastText">{condition}</p>
        <p className="forecastText">{name}</p>
      </span>
    </div>
  );
}
