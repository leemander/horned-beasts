import { useState } from "react";

export default function Footer() {
  const [styled, setStyled] = useState(false);

  return (
    <footer onClick={() => setStyled((prev) => !prev)}>
      <p className={styled ? "styled" : ""}>&copy; Lee Mander 2023</p>
    </footer>
  );
}
