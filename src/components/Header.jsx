import { useState } from "react";

export default function Header() {
  const [styled, setStyled] = useState(false);

  return (
    <header>
      <h1
        onClick={() => setStyled((prev) => !prev)}
        style={{ color: styled ? "hotpink" : "black" }}
      >
        Horned Beasts
      </h1>
    </header>
  );
}
