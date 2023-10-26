export default function Form({
  handleChange,
  handleSubmit,
  formData,
  setFormData,
}) {
  function resetFilters(e) {
    e.preventDefault();
    setFormData({});
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="searchTerm"
        onChange={(e) => handleChange(e)}
        value={formData.searchTerm}
      />
      <button type="submit">Search</button>
      <button onClick={(e) => resetFilters(e)}>Reset</button>
    </form>
  );
}
