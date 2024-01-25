// card view of forecast, reusable
export default function Forecast({ type, locationData }) {
  console.log("ref", "condition", locationData);
  if (!locationData.current) {
    <p>loading forecast...</p>;
  }
  // if (locationData.current)
  return (
    <div className="window daily">
      <div className="title-bar">
        <div className="title-bar-text">Daily Forecast</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <span className="dailytextContainer">
        <p className="forecastText">
          {Math.round(locationData.current.temp_f)}
        </p>
        <p className="forecastText">{locationData.current.condition.text}</p>
        <p className="forecastText">{locationData.location.name}</p>
      </span>
    </div>
  );
}
