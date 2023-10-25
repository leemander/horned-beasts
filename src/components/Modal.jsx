export default function Modal({ toggleModal, src, name, desc }) {
  return (
    <dialog className="beast__modal">
      <button onClick={toggleModal}></button>
      <img src={src} alt={name} />
      <p>{desc}</p>
    </dialog>
  );
}
