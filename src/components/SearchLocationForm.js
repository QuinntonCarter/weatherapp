import { useState } from "react";
const searchIcon2 = require("../images/magnifystop_w.gif");

export default function SearchLocationForm({ location, setLocation, ipData }) {
  const [searchInputs, setSearchInputs] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLocation(searchInputs);
  }

  function handleReset(e) {
    e.preventDefault();
    setLocation(ipData.postal);
  }

  return (
    <div className="window">
      <label htmlFor="location">Search a Location</label>
      <form
        id="searchForm"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <img
          src={searchIcon2}
          alt="Search location icon"
        />
        <div className="field-row">
          <label htmlFor="location">City or Zip </label>
          <input
            title="Use zip code for best results"
            onChange={(e) => setSearchInputs(e.target.value)}
            id="location"
            type="text"
            placeholder={`${location}`}
            style={{ textTransform: "capitalize" }}
            required={true}
          />
        </div>
        <span className="searchButtons">
          <input type="submit" />
          <input type="reset" />
        </span>
      </form>
    </div>
  );
}
