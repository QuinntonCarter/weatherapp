import { useEffect, useRef, useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";

// dayjs.extend(customParseFormat);

// card view of forecast, reusable
export default function Forecast({
  type,
  temp,
  condition,
  name = false,
  maxtemp = false,
  mintemp = false,
  index,
  testArr,
  date,
}) {
  console.log("ref", "condition", date);
  const [display, setDisplay] = useState(true);

  let positionY = Math.random() * 60;
  let positionX = Math.random() * 84;

  const forecastDate = dayjs.unix(date).format("MM-DD-YYYY");
  const typeOfTitle = type === "Extended" ? forecastDate : "Daily forecast";

  function handleCloseWindow() {
    setDisplay(false);
    console.log("this is window", index);
  }

  // bottom between 1 and 60 x
  // left between 1 and 84 x
  // how to stagger display?
  // add button to "organize" view (same as mobile view?)
  const isAverage = mintemp || maxtemp ? "Average " : "";
  if (!temp) {
    <p>loading forecast...</p>;
  }

  // debugging
  // useEffect(() => {
  //   console.log(positionY, positionX);
  //   for (const window in testArr) {
  //     // positionX.current = Math.random() * 84;
  //   }
  // }, []);

  return (
    <div
      className={`${type === "Extended" && "extended"} window daily`}
      style={{
        display: !display && "none",
        bottom: `${positionY}%`,
        left: `${positionX}%`,
      }}
    >
      <div className="title-bar">
        <div className="title-bar-text">{typeOfTitle}</div>
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
