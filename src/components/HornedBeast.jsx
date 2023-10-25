import { useState } from "react";

export default function HornedBeast({ name, url, chooseBeast }) {
  const [faves, setFaves] = useState(0);

  function increaseFaves() {
    setFaves(faves + 1);
  }

  return (
    <article className="gallery__beast">
      <header>
        <h2>{name}</h2>
        <button className="beast__fav-button" onClick={increaseFaves}>
          {faves}
        </button>
      </header>
      <img src={url} alt={name} onClick={() => chooseBeast(name)} />
    </article>
  );
}
