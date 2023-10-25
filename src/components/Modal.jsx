export default function Modal({ toggleModal, url, name, desc }) {
  return (
    <dialog className="beast__modal">
      <button aria-label="close modal" onClick={toggleModal}>
        X
      </button>
      <h3>{name}</h3>
      <img src={url} alt={name} />
      <p>{desc}</p>
    </dialog>
  );
}
