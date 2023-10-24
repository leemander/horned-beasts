import { useState } from "react";

export default function Footer() {
  const [styled, setStyled] = useState(false);

  function handleClick() {
    setStyled((previous) => !previous);
  }

  return (
    <footer onClick={handleClick}>
      <p className={styled ? "styled" : ""}>&copy; Lee Mander 2023</p>
    </footer>
  );
}
