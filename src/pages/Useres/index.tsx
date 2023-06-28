import React, { useState,  useEffect } from 'react';
import axios from 'axios';

import People from '../../assets/perfil.svg';
import Arrow from '../../assets/flecha.svg';
import lixo from '../../assets/lixo.svg';

import {
  Container,
  H1,
  Imagem,
  ContainerIntes,
  Button,
  ImgFlecha,
  User
} from './styles';

interface Pessoa {
  id: number;
  name: string;
  age: number;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<Pessoa[]>([]);
 
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


  async function deleteUser(id: number) {
    await axios.delete(`http://localhost:5000/users/${id}`)
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  }

  return (
    <Container>
      <Imagem src={People} alt="People" />
      <ContainerIntes>
        <H1>Usuarios</H1>
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

        <Button to="/" >
        <ImgFlecha src={Arrow} alt="seta" /> Voltar 
        </Button>

      </ContainerIntes>
    </Container>
  );
};

export default Users;

