import { useState } from "react";
import Person from "./Person";
import Cc from './components/Cc';
import PersonForm from "./PersonForm";
import styled from "styled-components";
import Compo from "./components/Compo";
const Container = styled.div`
  display: flex;
  background-color: skyblue;
  flex-direction: column;
  width: 60%;
  border-radius: 12px;
  margin: 0 auto;

`;
const Titre = styled.h1`
color: blue;
text-align: center;
`
const App = () => {
  const [datas, setDatas] = useState([
    {
      id: 1,
      nom: "frank",
    },
    {
      id: 2,
      nom: "francoo",
    },
  ]);
  const handleDelete = (id) => {
    const copydatas = [...datas];
    const filtrer = copydatas.filter((res) => res.id != id);
    setDatas(filtrer);
  };

  const handleadd = (elementaajouter) => {
    const copyDatas = [...datas];
    copyDatas.push(elementaajouter);
    setDatas(copyDatas);
  };

  const personPref = (sonNom) => {
    alert(`j'aime beaucoup: ${sonNom}`);
  };
  return (
    <>
      <Container>
       <Titre>
        Liste des personnes
       </Titre>
        {datas.map((dat, index) => (
          <Person
            key={index}
            dat={dat}
            handleDelete={handleDelete}
            index={index}
            onclick={() => handleDelete(dat.id)}
          />
        ))}
        <PersonForm handleadd={handleadd} />
      </Container>
      <Cc/>
      <Compo/>
    </>
  );
};

export default App;
