import { useState } from "react";

export default function Header() {
  const [styled, setStyled] = useState(false);

  function handleClick() {
    setStyled((previous) => !previous);
  }

  return (
    <header>
      <h1 className={styled ? "styled" : ""} onClick={handleClick}>
        Horned Beasts
      </h1>
    </header>
  );
}
