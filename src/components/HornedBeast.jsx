import { useState } from "react";

export default function HornedBeast(props) {
  const [faves, setFaves] = useState(0);

  function increaseFaves() {
    console.log("hi");
    setFaves((previousFaves) => (previousFaves += 1));
  }

  return (
    <article className="gallery__beast">
      <h2>{props.name}</h2>
      <img src={props.url} alt={props.name} />
      <p>{props.desc}</p>
      <button className="beast__fav-button" onClick={increaseFaves}>
        {faves}
      </button>
    </article>
  );
}
