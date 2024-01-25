export default function SearchLocationForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div className="window">
      <form onSubmit={handleSubmit}>
        <div className="field-row">
          <label htmlFor="location">Location</label>
          <input id="location" type="text" placeholder="Salt Lake City" />
        </div>
        <input type="submit" />
        <input type="reset" />
      </form>
    </div>
  );
}
