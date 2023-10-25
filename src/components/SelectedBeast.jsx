export default function SelectedBeast({ setChosenBeast, url, name, desc }) {
  function handleClick(e) {
    if (e.target.className === "beast__modal") {
      setChosenBeast(null);
    }
  }

  return (
    <dialog className="beast__modal" onClick={(e) => handleClick(e)}>
      <button aria-label="close modal" onClick={() => setChosenBeast(null)}>
        X
      </button>
      <h3>{name}</h3>
      <img src={url} alt={name} />
      <p>{desc}</p>
    </dialog>
  );
}
