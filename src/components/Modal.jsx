export default function Modal({ toggleModal, url, name, desc }) {
  return (
    <dialog className="beast__modal">
      <button onClick={toggleModal}></button>
      <img src={url} alt={name} />
      <p>{desc}</p>
    </dialog>
  );
}
