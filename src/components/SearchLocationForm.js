export default function SearchLocationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
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
            id="location"
            type="text"
            placeholder="Salt Lake City"
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
