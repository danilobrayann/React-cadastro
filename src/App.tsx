import React, { useState } from 'react';
import People from './assets/pessoas.svg';
import Arrow from './assets/flecha.svg';
import lixo from './assets/lixo.svg';

import {
  Container,
  H1,
  Imagem,
  ContainerIntes,
  InputLabel,
  Input,
  Button,
  ImgFlecha,
  User
} from './styles';

interface Pessoa {
  id: number;
  name: string;
  age: number;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<Pessoa[]>([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function addNewUser() {
    const newUser: Pessoa = {
      id: Math.random(),
      name: name,
      age: parseInt(age)
    };

    setUsers([...users, newUser]);
    setName('');
    setAge('');
  }

  function changeInputName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function changeInputAge(event: React.ChangeEvent<HTMLInputElement>) {
    setAge(event.target.value);
  }

  function deleteUser(id: number) {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <Container>
      <Imagem src={People} alt="People" />
      <ContainerIntes>
        <H1>Olá</H1>
        <InputLabel>Nome</InputLabel>
        <Input onChange={changeInputName} value={name} placeholder="nome" />

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeInputAge} value={age} placeholder="idade" />

        <Button onClick={addNewUser}>
          Cadastrar <ImgFlecha src={Arrow} alt="seta" />
        </Button>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={lixo} alt="lata de lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ContainerIntes>
    </Container>
  );
};

export default App;

