import React from 'react';
import People from './assets/pessoas.svg';
import Arrow from './assets/flecha.svg';
import lixo from './assets/lixo.svg'

import {
  Container,
  H1,
  Imagem,
  ContainerIntes,
  InputLabel,
  Input,
  Button,
  ImgFlecha,
  User, 
} from './styles';

interface Pessoa {
  id: number;
  name: string;
  age: number;
}
//Jsx
const App: React.FC = () => {
  const users: Pessoa[] = [
    { id: Math.random(), name: 'Danilo', age: 26 },
    { id: Math.random(), name: 'Maria', age: 20 },
  ];

  return (
    <Container>
      <Imagem src={People} alt="People" />
      <ContainerIntes>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder="nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="idade" />

        <Button>
          Cadastra <ImgFlecha src={Arrow} alt="seta" />
        </Button>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p>
            <button><img src={lixo} alt="lata de lixo" /></button>
              
              </User>
          ))}
        </ul>
      </ContainerIntes>
    </Container>
  );
};

export default App;
