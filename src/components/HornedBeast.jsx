import { useState } from "react";
import Modal from "./Modal";

export default function HornedBeast({ name, url, desc }) {
  const [faves, setFaves] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function increaseFaves() {
    setFaves(faves + 1);
  }

  function toggleModal() {
    setShowModal(!showModal);
    console.log(showModal);
  }

  return (
    <article className="gallery__beast">
      <header>
        <h2>{name}</h2>
        <button className="beast__fav-button" onClick={increaseFaves}>
          {faves}
        </button>
      </header>
      <img src={url} alt={name} onClick={toggleModal} />
      {/* <p>{desc}</p> */}
      {showModal && (
        <Modal toggleModal={toggleModal} name={name} url={url} desc={desc} />
      )}
    </article>
  );
}
