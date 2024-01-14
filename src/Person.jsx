import styled from "styled-components";

export default function Person ({onclick, dat, handleDelete}){

  const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 9px 10px auto;
  background-color: teal;
  border-radius: 12px;
  border: 2px solid #fff;
  `;
  const Li = styled.li`
  list-style: none;
  margin: 5.5px;

  `;
  const Btn = styled.button`
  background-color: #fff;
  border-radius: 4px;
  margin: 2px;
  `

    return (
      <Container>
        <Li>
          {dat.nom}
          {""} <Btn onClick={onclick}>X</Btn>
        </Li>
      </Container>
    );
}
