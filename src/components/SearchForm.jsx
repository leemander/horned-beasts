export default function SearchForm({
  handleChange,
  handleSubmit,
  searchTerm,
  setFilteredData,
}) {
  function resetFilters(e) {
    e.preventDefault();
    setFilteredData(null);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onChange={(e) => handleChange(e)} value={searchTerm} />
      <button type="submit">Search</button>
      <button onClick={(e) => resetFilters(e)}>Reset</button>
    </form>
  );
}
