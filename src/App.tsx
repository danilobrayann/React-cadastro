import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

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
  const inputName = useRef<HTMLInputElement>(null);
  const inputAge = useRef<HTMLInputElement>(null);

  async function addNewUser() {

    //criando novos usuario
   const { data: newUser } = await axios.post('http://localhost:5000/users', { name: inputName.current?.value, age: inputAge.current?.value })

   setUsers([...users, newUser]);

  

  }
   // assim que carregar a pagina o useEffect será chamado
   // ou quando está no arrey de dependencias
  // espera dois paramentro, uma function e um arrey
  useEffect(()=>{

    async function CadastroUser (){

 //mostrando meu usuario cadastrado
 const {data: UpdateUsers} = await axios.get('http://localhost:5000/users')

 setUsers(UpdateUsers)

    } 

    CadastroUser ()

  },[])


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
        <Input ref={inputName} placeholder="nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="idade" />

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

