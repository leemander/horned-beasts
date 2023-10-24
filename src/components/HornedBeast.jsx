import { useState } from "react";

export default function HornedBeast(props) {
  const [faves, setFaves] = useState(0);

  function increaseFaves() {
    setFaves((previousFaves) => (previousFaves += 1));
  }

  return (
    <article className="gallery__beast">
      <header>
        <h2>{props.name}</h2>
        <button className="beast__fav-button" onClick={increaseFaves}>
          {faves}
        </button>
      </header>{" "}
      <img src={props.url} alt={props.name} />
      <p>{props.desc}</p>
    </article>
  );
}
