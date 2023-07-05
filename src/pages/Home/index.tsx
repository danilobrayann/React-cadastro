import React, { useState, useRef, } from 'react';
import axios from 'axios';

import People from '../../assets/pessoas.svg';
import Arrow from '../../assets/flecha.svg';

import { H1 } from '../../components/Title/styles';

import {
  Container,
  Imagem,
  ContainerIntes,
  InputLabel,
  Input,
  Button,
  ImgFlecha,
} from './styles';

interface Pessoa {
  id: number;
  name: string;
  age: number;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<Pessoa[]>([]);
  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);

  async function addNewUser() {

    //criando novos usuario
   const { data: newUser } = await axios.post('http://localhost:5000/users', { name: inputName.current?.value, age: inputAge.current?.value })

   setUsers([...users, newUser]);

  

  }
   




  return (
    <Container>
      <Imagem src={People} alt="People" />
      <ContainerIntes>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="idade" />

        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <ImgFlecha src={Arrow} alt="seta" />
        </Button>
        
      </ContainerIntes>
    </Container>
  );
};

export default App;

