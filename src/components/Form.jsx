export default function Form({
  handleChange,
  handleSubmit,
  formData,
  setFormData,
  setFilteredData,
}) {
  function resetFilters(e) {
    e.preventDefault();
    setFormData({ searchTerm: "", horns: "" });
    setFilteredData(null);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form__inputs">
        <label htmlFor="search-term">
          Search:
          <input
            type="text"
            name="searchTerm"
            id="searchTerm"
            onChange={(e) => handleChange(e)}
            value={formData.searchTerm}
          />
        </label>

        <label htmlFor="horns">
          Filter by # of horns:
          <select
            name="horns"
            id="horns"
            onChange={(e) => handleChange(e)}
            value={formData.horns}
          >
            <option value="any">any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </select>
        </label>
      </div>
      <div className="form__buttons">
        <button type="submit">Search</button>
        <button onClick={(e) => resetFilters(e)}>Reset</button>
      </div>
    </form>
  );
}
