import { useState } from "react";

export default function SearchLocationForm({ location, setLocation }) {
  const [searchInputs, setSearchInputs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(searchInputs);
  };

  return (
    <div className="window">
      <label htmlFor="location">Search a Location</label>
      <form
        id="searchForm"
        onSubmit={handleSubmit}
      >
        <div className="field-row">
          <label htmlFor="location">Location</label>
          <input
            title="Use zip code for best results"
            onChange={(e) => setSearchInputs(e.target.value)}
            id="location"
            type="text"
            placeholder={`${location}`}
            style={{ textTransform: "capitalize" }}
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
