import { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
position: absolute;
  margin: 0 auto;
top: 70px;
margin-left: 19.5%;

`;
export default function PersonForm({ handleadd }) {
  const [valeur, setValeur] = useState("");
  const handleChange = (e) => {
    setValeur(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getTime();
    const nom = valeur;
    const newDatas = { id, nom };
    handleadd(newDatas);
    setValeur("");
  };

  return (
    <Container>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={valeur} onChange={handleChange} />
        <input type="submit" />
      </form>
    </Container>
  );
}
