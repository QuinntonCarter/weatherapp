import { useEffect, useState } from "react";
import dayjs from "dayjs";
import useIcon from "../hooks/useIcon";

export default function Forecast({
  type,
  temp,
  condition,
  name = false,
  maxtemp = false,
  mintemp = false,
  date,
  img,
}) {
  const [display, setDisplay] = useState("none");
  const forecastDate = dayjs.unix(date).format("MM-DD-YYYY");
  const typeOfTitle = type === "Extended" ? forecastDate : "Daily forecast";

  const { icon } = useIcon(condition);

  function handleCloseWindow() {
    setDisplay("none");
  }

  const isAverage = mintemp || maxtemp ? "Average " : "";
  if (!temp) {
    <p>loading forecast...</p>;
  }

  useEffect(() => {
    const staggerDisplayTime = Math.random() * 1200;
    setTimeout(() => {
      setDisplay("block");
    }, staggerDisplayTime);
  }, []);

  return (
    <div
      className={`${type === "Extended" && "extended"} window daily`}
      style={{
        display: display,
      }}
    >
      <div className={`title-bar ${type === "Daily" && `dailyTitleBar`}`}>
        <div className={`title-bar-text`}>{typeOfTitle}</div>
        {type === "Extended" ? (
          <div className="title-bar-controls">
            <button
              aria-label="Close"
              onClick={handleCloseWindow}
            ></button>
          </div>
        ) : null}
      </div>
      <span className="dailytextContainer">
        <img
          src={icon}
          alt={"condition description icon"}
          style={{ imageRendering: "pixelated" }}
        />
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
